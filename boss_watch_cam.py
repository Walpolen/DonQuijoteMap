#!/usr/bin/env python3
"""macOS 双小窗摄像头监看工具。

功能：
1) 读取 Mac 默认摄像头画面
2) 每帧按中线分为左右两半
3) 左半显示在左窗口，右半显示在右窗口
4) 两个窗口可拖动、默认贴屏幕边缘、始终置顶

退出方式：
- 关闭任意窗口
- 在任意窗口按 Esc
"""

from __future__ import annotations

import argparse
import queue
import threading
import time
import tkinter as tk
from typing import Optional

try:
    import cv2
    from PIL import Image, ImageTk
except ImportError as exc:  # pragma: no cover - runtime guard
    missing = "opencv-python / pillow"
    raise SystemExit(
        f"缺少依赖：{missing}\n请先执行：python3 -m pip install opencv-python pillow\n原始错误：{exc}"
    )


class DraggablePreviewWindow:
    """可拖动的置顶小窗。"""

    def __init__(
        self,
        root: tk.Tk,
        title: str,
        x: int,
        y: int,
        width: int,
        height: int,
    ) -> None:
        self.win = tk.Toplevel(root)
        self.win.title(title)
        self.win.geometry(f"{width}x{height}+{x}+{y}")
        self.win.attributes("-topmost", True)
        self.win.configure(bg="black")

        self.image_label = tk.Label(self.win, bg="black", bd=0, highlightthickness=0)
        self.image_label.pack(fill=tk.BOTH, expand=True)

        self._drag_offset: Optional[tuple[int, int]] = None

        # 拖动窗口：标题栏可拖，这里额外支持在画面区域拖动
        self.image_label.bind("<ButtonPress-1>", self._start_drag)
        self.image_label.bind("<B1-Motion>", self._drag)

    def _start_drag(self, event: tk.Event) -> None:
        self._drag_offset = (event.x_root - self.win.winfo_x(), event.y_root - self.win.winfo_y())

    def _drag(self, event: tk.Event) -> None:
        if self._drag_offset is None:
            return
        dx, dy = self._drag_offset
        self.win.geometry(f"+{event.x_root - dx}+{event.y_root - dy}")

    def set_frame(self, bgr_frame) -> None:
        rgb = cv2.cvtColor(bgr_frame, cv2.COLOR_BGR2RGB)
        image = Image.fromarray(rgb)
        photo = ImageTk.PhotoImage(image=image)
        self.image_label.configure(image=photo)
        self.image_label.image = photo


class CameraWorker(threading.Thread):
    """后台拉取摄像头帧，主线程只负责 UI 刷新。"""

    def __init__(self, camera_index: int, frame_queue: queue.Queue, stop_event: threading.Event) -> None:
        super().__init__(daemon=True)
        self.camera_index = camera_index
        self.frame_queue = frame_queue
        self.stop_event = stop_event

    def _open_camera(self):
        # macOS 优先 AVFoundation
        cap = cv2.VideoCapture(self.camera_index, cv2.CAP_AVFOUNDATION)
        if cap.isOpened():
            return cap

        # 回退默认后端
        cap.release()
        cap = cv2.VideoCapture(self.camera_index)
        if cap.isOpened():
            return cap

        return cap

    def run(self) -> None:
        cap = self._open_camera()
        if not cap.isOpened():
            self.frame_queue.put(None)
            return

        # 降低延迟（部分后端会忽略）
        cap.set(cv2.CAP_PROP_BUFFERSIZE, 1)

        while not self.stop_event.is_set():
            ok, frame = cap.read()
            if not ok:
                time.sleep(0.03)
                continue

            if self.frame_queue.full():
                try:
                    self.frame_queue.get_nowait()
                except queue.Empty:
                    pass
            self.frame_queue.put(frame)

        cap.release()


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="macOS 双小窗摄像头分屏监看")
    parser.add_argument("--camera-index", type=int, default=0, help="摄像头索引，默认 0")
    parser.add_argument("--window-width", type=int, default=280, help="单个窗口宽度，默认 280")
    parser.add_argument("--window-height", type=int, default=180, help="单个窗口高度，默认 180")
    parser.add_argument("--fps", type=int, default=24, help="界面刷新帧率，默认 24")
    parser.add_argument("--margin", type=int, default=16, help="窗口离屏幕边缘间距，默认 16")
    return parser


def main() -> int:
    args = build_parser().parse_args()

    root = tk.Tk()
    root.withdraw()

    screen_w = root.winfo_screenwidth()
    screen_h = root.winfo_screenheight()

    y = max(args.margin, screen_h // 2 - args.window_height // 2)

    left_win = DraggablePreviewWindow(
        root=root,
        title="左后方",
        x=args.margin,
        y=y,
        width=args.window_width,
        height=args.window_height,
    )
    right_win = DraggablePreviewWindow(
        root=root,
        title="右后方",
        x=screen_w - args.window_width - args.margin,
        y=y,
        width=args.window_width,
        height=args.window_height,
    )

    stop_event = threading.Event()
    frame_queue: queue.Queue = queue.Queue(maxsize=1)
    worker = CameraWorker(args.camera_index, frame_queue, stop_event)
    worker.start()

    interval_ms = max(1, int(1000 / max(1, args.fps)))

    def shutdown() -> None:
        stop_event.set()
        root.quit()

    # 快捷键退出
    left_win.win.bind("<Escape>", lambda _: shutdown())
    right_win.win.bind("<Escape>", lambda _: shutdown())

    left_win.win.protocol("WM_DELETE_WINDOW", shutdown)
    right_win.win.protocol("WM_DELETE_WINDOW", shutdown)

    def refresh() -> None:
        try:
            frame = frame_queue.get_nowait()
        except queue.Empty:
            frame = None

        if frame is None and not worker.is_alive():
            left_win.win.title("左后方（摄像头打开失败）")
            right_win.win.title("右后方（摄像头打开失败）")
            root.after(interval_ms, refresh)
            return

        if frame is not None:
            h, w, _ = frame.shape
            if w >= 2:
                mid = w // 2
                left_half = frame[:, :mid]
                right_half = frame[:, mid:]
            else:
                # 极端情况回退：复制同一帧
                left_half = frame
                right_half = frame

            left_half = cv2.resize(left_half, (args.window_width, args.window_height), interpolation=cv2.INTER_AREA)
            right_half = cv2.resize(right_half, (args.window_width, args.window_height), interpolation=cv2.INTER_AREA)

            left_win.set_frame(left_half)
            right_win.set_frame(right_half)

        root.after(interval_ms, refresh)

    root.after(interval_ms, refresh)
    root.mainloop()

    stop_event.set()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

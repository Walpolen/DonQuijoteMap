# DonQuijoteMap

## macOS 双小窗摄像头监看（完整可运行）

文件：`boss_watch_cam.py`

### 安装依赖

```bash
python3 -m pip install opencv-python pillow
```

### 运行

```bash
python3 boss_watch_cam.py
```

### 可选参数

```bash
python3 boss_watch_cam.py \
  --camera-index 0 \
  --window-width 280 \
  --window-height 180 \
  --fps 24 \
  --margin 16
```

### 行为说明

- 摄像头画面会按中线切成左右两半
- 左半显示在左窗口「左后方」，右半显示在右窗口「右后方」
- 两个窗口默认贴左右边缘、始终置顶，并可直接鼠标拖动
- 关闭任一窗口或按 `Esc` 可退出

> 首次运行时，macOS 会请求摄像头权限，请在系统弹窗中允许。

const tripData = [
  {
    id: 1,
    chapter: "第一部 第1章",
    phase: "初次出发前",
    place: "拉曼查某村（Un lugar de La Mancha）",
    ancientName: "La Mancha",
    modernHint: "今卡斯蒂利亚-拉曼查自治区中部，具体村名在小说中未明示。",
    coords: [39.015, -3.098],
    story:
      "阿隆索·吉哈诺在家中沉迷骑士小说，修补盔甲、命名罗西南多，并选定“堂吉诃德·德·拉曼查”作为骑士名号，完成精神上的出征。",
    travel: { distanceKm: 0, durationText: "—", source: "书中场景（起点）" }
  },
  {
    id: 2,
    chapter: "第一部 第2章",
    phase: "第一次出游",
    place: "拉曼查客店（Venta）",
    ancientName: "Venta manchega",
    modernHint: "传统解释多指托莱多南侧古驿道一带客店原型。",
    coords: [39.165, -3.155],
    story:
      "堂吉诃德把客店当作城堡，请店主主持授甲；夜里在水槽旁“守夜”引发冲突，被石块和木棍打得狼狈，却更坚信自己是天命骑士。",
    travel: { distanceKm: 18, durationText: "约1天", source: "估算（步骑混行）" }
  },
  {
    id: 3,
    chapter: "第一部 第4章",
    phase: "第一次出游",
    place: "橡树林牧场路段",
    ancientName: "Camino de pastores",
    modernHint: "拉曼查乡间牧道（地名未定，按路线估算）。",
    coords: [39.11, -2.97],
    story:
      "堂吉诃德遇见少年安德烈斯被主人责打，强行主持“正义”；他一离开，少年反遭更严厉报复，映照理想主义干预的失败。",
    travel: { distanceKm: 17, durationText: "约1天", source: "估算" }
  },
  {
    id: 4,
    chapter: "第一部 第5章",
    phase: "第一次出游结束",
    place: "归村路旁（拉曼查平原）",
    ancientName: "Llanura manchega",
    modernHint: "回村古道，近乡村田地。",
    coords: [39.03, -3.04],
    story:
      "堂吉诃德与商旅冲突后受伤倒地，被邻里认出并送回家，第一次出游草草收场；亲友随后焚毁其大量骑士小说。",
    travel: { distanceKm: 12, durationText: "半天", source: "估算" }
  },
  {
    id: 5,
    chapter: "第一部 第8章",
    phase: "第二次出游",
    place: "坎波·德·克里普塔纳风车群",
    ancientName: "Campo de Criptana",
    modernHint: "今雷阿尔城省著名风车山岗。",
    coords: [39.401, -3.122],
    story:
      "堂吉诃德把风车当作巨人冲锋，被风叶掀翻。桑丘首次系统扮演“现实解释者”，但解释总被“魔法师干预”理论抵消。",
    travel: { distanceKm: 42, durationText: "约2天", source: "估算" }
  },
  {
    id: 6,
    chapter: "第一部 第15章",
    phase: "第二次出游",
    place: "杨格斯骡夫营地",
    ancientName: "Arrieros yangüeses",
    modernHint: "拉曼查通往阿拉贡商路上的赶骡人驻点（原点位有争议）。",
    coords: [39.58, -2.74],
    story:
      "罗西南多招惹骡队母马后，堂吉诃德与桑丘遭群殴。两人把惨败解释为“骑士试炼”，讽刺了自我叙事对现实痛感的覆盖。",
    travel: { distanceKm: 38, durationText: "约2天", source: "估算" }
  },
  {
    id: 7,
    chapter: "第一部 第19章",
    phase: "第二次出游",
    place: "蒙蒂埃尔平原夜路",
    ancientName: "Campo de Montiel",
    modernHint: "拉曼查南部历史地理区。",
    coords: [38.703, -2.86],
    story:
      "夜行时看见火把队伍，堂吉诃德误判为“妖术集团”，攻击送葬神职队；事后虽负伤，仍把胜负改写为骑士荣耀。",
    travel: { distanceKm: 102, durationText: "约4-5天", source: "估算（长途）" }
  },
  {
    id: 8,
    chapter: "第一部 第22章",
    phase: "第二次出游",
    place: "王家大道苦役犯押解路段",
    ancientName: "Camino Real",
    modernHint: "连接托莱多与南部地区的王家道路系统。",
    coords: [39.304, -3.513],
    story:
      "堂吉诃德拦截押解队并释放苦役犯，要求他们去杜尔西内娅处“报恩”；众囚犯反以石块回击，理想性“解放”迅速瓦解。",
    travel: { distanceKm: 88, durationText: "约4天", source: "估算" }
  },
  {
    id: 9,
    chapter: "第一部 第26章",
    phase: "第二次出游",
    place: "莫雷纳山（塞拉莫雷纳）",
    ancientName: "Sierra Morena",
    modernHint: "卡斯蒂利亚与安达卢西亚之间山地。",
    coords: [38.35, -3.5],
    story:
      "堂吉诃德模仿骑士文学中的“山中苦修”，命桑丘带信回村。此地将“文学模仿”推进到行为极端，成为全书元叙事高潮之一。",
    travel: { distanceKm: 106, durationText: "约5天", source: "估算" }
  },
  {
    id: 10,
    chapter: "第二部 第10章",
    phase: "第三次出游",
    place: "托博索（El Toboso）",
    ancientName: "El Toboso",
    modernHint: "杜尔西内娅故乡，今托莱多省城镇。",
    coords: [39.512, -2.997],
    story:
      "堂吉诃德夜访杜尔西内娅，桑丘以“农妇即贵妇”骗局应对，主仆共同维持幻想系统；堂吉诃德将失配解释为“遭魔法变形”。",
    travel: { distanceKm: 138, durationText: "约6-7天", source: "估算" }
  },
  {
    id: 11,
    chapter: "第二部 第30章",
    phase: "第三次出游",
    place: "公爵庄园（阿拉贡方向）",
    ancientName: "Palacio de los Duques",
    modernHint: "常与阿拉贡贵族领地原型关联。",
    coords: [41.35, -1.64],
    story:
      "公爵夫妇把堂吉诃德主仆当成“可编排文本”，连续策划戏仿：飞木马、猫袭、假预言等，让现实贵族成为二次创作的操盘手。",
    travel: { distanceKm: 223, durationText: "约10-12天", source: "估算" }
  },
  {
    id: 12,
    chapter: "第二部 第45章",
    phase: "第三次出游",
    place: "“巴拉塔里亚岛”总督辖地（戏仿场景）",
    ancientName: "Ínsula Barataria",
    modernHint: "并非真实岛屿，系公爵布置的拟政务空间。",
    coords: [41.07, -1.23],
    story:
      "桑丘短暂担任“总督”，在审案与政务中显示民间智慧；当恶作剧升级到身体折磨与政治讽刺时，他主动辞职，完成价值转向。",
    travel: { distanceKm: 45, durationText: "约2天", source: "书中叙事近距离转场 + 估算" }
  },
  {
    id: 13,
    chapter: "第二部 第60章",
    phase: "前往地中海",
    place: "埃布罗河下游古道",
    ancientName: "Ribera del Ebro",
    modernHint: "阿拉贡至加泰罗尼亚交通轴线。",
    coords: [41.65, 0.89],
    story:
      "主仆脱离公爵戏台后南北辗转，进入更开放的公共空间；社会阶层与暴力秩序直接介入，使骑士幻想更难维系。",
    travel: { distanceKm: 191, durationText: "约8-9天", source: "估算" }
  },
  {
    id: 14,
    chapter: "第二部 第64章",
    phase: "旅程终局",
    place: "巴塞罗那海滩",
    ancientName: "Barcelona",
    modernHint: "小说中少见的具名都市现场。",
    coords: [41.3851, 2.1734],
    story:
      "堂吉诃德败于“白月骑士”，被迫一年内弃骑士生涯；这是全书最关键的现实判决，骑士文本在公共决斗中宣告落幕。",
    travel: { distanceKm: 116, durationText: "约5天", source: "书中结局事件地 + 估算路程" }
  }
];

const chapterRange = document.getElementById("chapterRange");
const chapterLabel = document.getElementById("chapterLabel");
const chapterSummary = document.getElementById("chapterSummary");
const storyBox = document.getElementById("storyBox");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const playBtn = document.getElementById("playBtn");
const metricStops = document.getElementById("metricStops");
const metricDistance = document.getElementById("metricDistance");
const metricDuration = document.getElementById("metricDuration");
const locationList = document.getElementById("locationList");

const map = L.map("map", { zoomControl: true }).setView([39.45, -3.5], 6);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const routeLine = L.polyline([], {
  color: "#dc2626",
  weight: 4,
  opacity: 0.9,
  dashArray: "8 6"
}).addTo(map);

chapterRange.max = tripData.length;
chapterRange.value = 1;

let autoPlayTimer = null;
let activeIndex = 0;

function calcDurationDays(unlocked) {
  return unlocked.reduce((sum, stop) => {
    const parsed = Number(stop.travel.durationText.match(/\d+/)?.[0] || 0);
    return sum + parsed;
  }, 0);
}

function updateStory(stop, isAutoFocus = false) {
  const focusTag = isAutoFocus ? "<span class='route-badge'>自动聚焦到当前章节最新地点</span>" : "";
  storyBox.innerHTML = `
    <strong>${stop.chapter} · ${stop.place}</strong><br/>
    <em>古名：${stop.ancientName}</em><br/>
    <em>位置说明：${stop.modernHint}</em>
    <p>${stop.story}</p>
    <p><strong>上一段行程：</strong>${stop.travel.distanceKm} km，${stop.travel.durationText}（${stop.travel.source}）</p>
    ${focusTag}
  `;
}

function createLocationList(unlocked, currentIdx) {
  locationList.innerHTML = "";
  unlocked.forEach((stop, idx) => {
    const li = document.createElement("li");
    li.className = idx === currentIdx ? "active" : "";
    li.innerHTML = `<strong>${stop.chapter}</strong><br/>${stop.place}<br/><small>+${stop.travel.distanceKm} km · ${stop.travel.durationText}</small>`;
    li.addEventListener("click", () => {
      markers[idx].fire("click");
    });
    locationList.appendChild(li);
  });
}

const markers = tripData.map((stop, idx) => {
  const marker = L.circleMarker(stop.coords, {
    radius: 7,
    color: "#1d4ed8",
    fillColor: "#60a5fa",
    fillOpacity: 0.95,
    weight: 2
  }).addTo(map);

  marker.bindTooltip(`${idx + 1}. ${stop.place}`);
  marker.on("click", () => {
    activeIndex = idx;
    updateStory(stop, false);
    map.flyTo(stop.coords, Math.max(map.getZoom(), 7), { duration: 0.45 });
    createLocationList(tripData.slice(0, Number(chapterRange.value)), activeIndex);
  });

  return marker;
});

function render(index) {
  activeIndex = index;
  const unlocked = tripData.slice(0, index + 1);
  const points = unlocked.map((item) => item.coords);

  routeLine.setLatLngs(points);

  markers.forEach((marker, i) => {
    const isVisible = i <= index;
    marker.setStyle({
      opacity: isVisible ? 1 : 0.2,
      fillOpacity: isVisible ? 0.95 : 0.15,
      radius: i === index ? 9 : 7,
      color: i === index ? "#b91c1c" : "#1d4ed8",
      fillColor: i === index ? "#fca5a5" : "#60a5fa"
    });
  });

  const current = tripData[index];
  chapterLabel.textContent = `${current.chapter}（地点 ${index + 1}/${tripData.length}）`;
  chapterSummary.textContent = `${current.phase}：${current.story.slice(0, 55)}...`;

  const totalDistance = unlocked.reduce((sum, stop) => sum + stop.travel.distanceKm, 0);
  metricStops.textContent = String(unlocked.length);
  metricDistance.textContent = `${totalDistance.toLocaleString("zh-CN")} km`;
  metricDuration.textContent = `${calcDurationDays(unlocked)} 天（约）`;

  updateStory(current, true);
  createLocationList(unlocked, index);

  if (points.length > 1) {
    map.fitBounds(routeLine.getBounds(), { padding: [35, 35] });
  } else {
    map.flyTo(points[0], 7, { duration: 0.4 });
  }

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === tripData.length - 1;
}

chapterRange.addEventListener("input", (e) => {
  render(Number(e.target.value) - 1);
});

prevBtn.addEventListener("click", () => {
  chapterRange.value = Math.max(1, Number(chapterRange.value) - 1);
  render(Number(chapterRange.value) - 1);
});

nextBtn.addEventListener("click", () => {
  chapterRange.value = Math.min(tripData.length, Number(chapterRange.value) + 1);
  render(Number(chapterRange.value) - 1);
});

playBtn.addEventListener("click", () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
    playBtn.textContent = "自动播放";
    return;
  }

  playBtn.textContent = "暂停播放";
  autoPlayTimer = setInterval(() => {
    const current = Number(chapterRange.value);
    if (current >= tripData.length) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
      playBtn.textContent = "自动播放";
      return;
    }
    chapterRange.value = current + 1;
    render(Number(chapterRange.value) - 1);
  }, 1800);
});

render(0);

const panelElements = document.querySelectorAll(".floating-panel");
const minimizeButtons = document.querySelectorAll("[data-minimize]");
const restoreButtons = document.querySelectorAll("[data-restore]");

function syncDockButton(panelName, isMinimized) {
  const btn = document.querySelector(`[data-restore='${panelName}']`);
  if (!btn) return;
  btn.classList.toggle("hidden", !isMinimized);
}

function minimizePanel(panelName) {
  const panel = document.querySelector(`.floating-panel[data-panel='${panelName}']`);
  if (!panel) return;
  panel.classList.add("minimized");
  syncDockButton(panelName, true);
}

function restorePanel(panelName) {
  const panel = document.querySelector(`.floating-panel[data-panel='${panelName}']`);
  if (!panel) return;
  panel.classList.remove("minimized");
  syncDockButton(panelName, false);
  setTimeout(() => map.invalidateSize(), 180);
}

minimizeButtons.forEach((btn) => {
  btn.addEventListener("click", () => minimizePanel(btn.dataset.minimize));
});

restoreButtons.forEach((btn) => {
  btn.addEventListener("click", () => restorePanel(btn.dataset.restore));
  syncDockButton(btn.dataset.restore, false);
});

if (window.matchMedia("(max-width: 760px)").matches) {
  minimizePanel("story");
  minimizePanel("side");
}

panelElements.forEach((panel) => {
  if (!panel.classList.contains("minimized")) {
    syncDockButton(panel.dataset.panel, false);
  }
});

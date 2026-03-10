const routeData = [
  {
    chapter: 1,
    label: "第一部 第1章",
    summary: "拉曼查乡绅阿隆索·吉哈诺决定化身骑士堂吉诃德，开始第一次出行。",
    place: {
      name: "拉曼查某村（Un lugar de La Mancha）",
      modernHint: "今属卡斯蒂利亚-拉曼查地区",
      coords: [39.0, -3.0],
      story:
        "堂吉诃德在家中沉迷骑士小说，整理祖传盔甲，给瘦马取名“罗西南多”，并把自己封为游侠骑士。"
    }
  },
  {
    chapter: 2,
    label: "第一部 第2章",
    summary: "堂吉诃德夜行离乡，在古客店完成自我认定的“骑士之夜”。",
    place: {
      name: "客店（Venta manchega）",
      modernHint: "拉曼查平原古道旁驿站",
      coords: [39.08, -3.11],
      story:
        "他把客店误认为城堡，请店主（他眼中的城堡领主）主持授甲仪式，并在院中守夜引发冲突。"
    }
  },
  {
    chapter: 3,
    label: "第一部 第8章",
    summary: "堂吉诃德与桑丘结伴后，遭遇最著名的“风车之战”。",
    place: {
      name: "坎波·德·克里普塔纳（Campo de Criptana）风车群",
      modernHint: "古拉曼查风车地带",
      coords: [39.401, -3.122],
      story:
        "堂吉诃德把风车看作巨人，持枪冲锋后被风叶掀翻；桑丘试图解释现实却无济于事。"
    }
  },
  {
    chapter: 4,
    label: "第一部 第19章",
    summary: "夜色中的“亡灵队伍”与误判，再次展示理想与现实冲突。",
    place: {
      name: "蒙蒂埃尔平原（Campo de Montiel）",
      modernHint: "堂吉诃德主要活动区域之一",
      coords: [38.7, -2.86],
      story:
        "堂吉诃德把运送尸体的神职队伍误认作邪恶势力并出手攻击，最后遍体鳞伤。"
    }
  },
  {
    chapter: 5,
    label: "第一部 第22章",
    summary: "在王家大道上拦截押解队，释放苦役犯。",
    place: {
      name: "王家大道（Camino Real）",
      modernHint: "连接托莱多与安达卢西亚的旧路段",
      coords: [39.3, -3.5],
      story:
        "堂吉诃德以“解救受压迫者”为名，打散押解队并放走囚犯，却反遭囚犯以石块回击。"
    }
  },
  {
    chapter: 6,
    label: "第二部 第30章",
    summary: "公爵夫妇登场，堂吉诃德主仆进入被戏弄与自我演绎并存的新阶段。",
    place: {
      name: "公爵城堡（Castillo de los Duques）",
      modernHint: "原型常被联系到阿拉贡贵族庄园",
      coords: [41.35, -1.64],
      story:
        "公爵夫妇把堂吉诃德当作活剧主角，设计连串恶作剧；桑丘也被安排“治理海岛”一节。"
    }
  },
  {
    chapter: 7,
    label: "第二部 第64章",
    summary: "在地中海港口迎来决定性决斗，堂吉诃德被迫收剑归乡。",
    place: {
      name: "巴塞罗那（Barcelona）",
      modernHint: "当时卡斯蒂利亚读者想象中的异域海港",
      coords: [41.3851, 2.1734],
      story:
        "堂吉诃德败于“白月骑士”，按约一年不得再行侠，从而踏上回乡与自我反思之路。"
    }
  }
];

const chapterRange = document.getElementById("chapterRange");
const chapterLabel = document.getElementById("chapterLabel");
const chapterSummary = document.getElementById("chapterSummary");
const storyBox = document.getElementById("storyBox");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

chapterRange.max = routeData.length;
chapterRange.value = 1;

const map = L.map("map").setView([39.45, -3.75], 6);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const routeLine = L.polyline([], {
  color: "#dc2626",
  weight: 4,
  opacity: 0.85
}).addTo(map);

const markers = routeData.map((item, index) => {
  const marker = L.marker(item.place.coords).addTo(map);
  marker.bindTooltip(`${index + 1}. ${item.place.name}`);
  marker.on("click", () => {
    storyBox.innerHTML = `<strong>${item.place.name}</strong><br/><em>${item.place.modernHint}</em><p>${item.place.story}</p>`;
  });
  return marker;
});

function renderChapter(chapterNum) {
  const current = routeData[chapterNum - 1];
  chapterLabel.textContent = `${current.label}（第 ${chapterNum} / ${routeData.length} 站）`;
  chapterSummary.textContent = current.summary;

  const visiblePoints = routeData.slice(0, chapterNum).map((item) => item.place.coords);
  routeLine.setLatLngs(visiblePoints);

  markers.forEach((marker, idx) => {
    const active = idx < chapterNum;
    if (active) {
      marker.setOpacity(1);
      marker.dragging && marker.dragging.disable();
    } else {
      marker.setOpacity(0.25);
    }
  });

  map.fitBounds(routeLine.getBounds(), { padding: [30, 30] });

  prevBtn.disabled = chapterNum === 1;
  nextBtn.disabled = chapterNum === routeData.length;
}

chapterRange.addEventListener("input", (event) => {
  renderChapter(Number(event.target.value));
});

prevBtn.addEventListener("click", () => {
  chapterRange.value = Math.max(1, Number(chapterRange.value) - 1);
  renderChapter(Number(chapterRange.value));
});

nextBtn.addEventListener("click", () => {
  chapterRange.value = Math.min(routeData.length, Number(chapterRange.value) + 1);
  renderChapter(Number(chapterRange.value));
});

renderChapter(1);

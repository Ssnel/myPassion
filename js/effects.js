const colors = "#ffffff";
const numStars = 100;
const layers = document.querySelectorAll(".stars-layer");
const vibe = document.querySelectorAll("#logo");

for (let i = 0; i < numStars; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.top = Math.random() * window.innerHeight + "px";
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.background = colors;
  star.style.width = star.style.height = Math.random() * 2 + 3 + "px";
  star.style.animationDuration = Math.random() * 3 + 2 + "s";
  star.style.animationDelay = Math.random() * 5 + "s";

  const layer = layers[Math.floor(Math.random() * layers.length)];
  layer.appendChild(star);
}

function createShootingStar() {
  const star = document.createElement("div");
  star.className = "shooting-star";
  star.style.top = Math.random() * (window.innerHeight / 2) + "px";
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.background = colors;
  star.style.width = star.style.height = "4px";
  star.style.animationDuration = "1s";

  const layer = layers[Math.floor(Math.random() * layers.length)];
  layer.appendChild(star);

  star.addEventListener("animationend", () => star.remove());
}

setInterval(createShootingStar, 1000);

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  layers[0].style.transform = `translateY(${scroll * 0.2}px)`;
  layers[1].style.transform = `translateY(${scroll * 0.5}px)`;
  layers[2].style.transform = `translateY(${scroll * 0.8}px)`;
});

/*pop up event*/

(function () {
  const STYLE = `
  .heart-popup-overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,.35);
    backdrop-filter: blur(2px); z-index: 9998;
  }
  .heart-popup {
    position: fixed; inset: 0; display: grid; place-items: center; z-index: 9999;
  }
  .heart-box { position: relative; width: 260px; height: 260px; }
  .heart-shape {
    width: 180px; height: 180px; position: absolute; left: 50%; top: 50%;
    transform: translate(-50%,-50%) rotate(-45deg);
    background: radial-gradient(circle at 30% 30%, #ffd1eb 0%, #ff70b8 50%, #ff3f9e 100%);
    box-shadow: 0 8px 30px rgba(255,63,158,.45);
  }
  .heart-shape::before, .heart-shape::after {
    content: ""; position: absolute; width: 180px; height: 180px; border-radius: 50%;
    background: inherit;
  }
  .heart-shape::before { top: -90px; left: 0; }
  .heart-shape::after  { left: 90px; top: 0; }
  .heart-content {
    position: absolute; z-index: 1; inset: 0; display: flex; align-items: center; justify-content: center;
    text-align: center; padding: 18px; transform: rotate(45deg);
    font: 700 18px/1.25 system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
    color: #fff; text-shadow: 0 1px 2px rgba(0,0,0,.35);
  }
  .heart-close {
    position: absolute; top: -10px; right: -10px; width: 36px; height: 36px; border-radius: 999px;
    border: none; cursor: pointer; font-size: 20px; line-height: 36px;
    background: #fff; box-shadow: 0 6px 18px rgba(0,0,0,.25);
  }
  `;

  function injectStyles() {
    if (document.getElementById("heart-popup-style")) return;
    const s = document.createElement("style");
    s.id = "heart-popup-style";
    s.textContent = STYLE;
    document.head.appendChild(s);
  }

  function showHeartPopup(text = "make the best of your day — positive vibes") {
    injectStyles();

    const overlay = document.createElement("div");
    overlay.className = "heart-popup-overlay";

    const popup = document.createElement("div");
    popup.className = "heart-popup";

    const box = document.createElement("div");
    box.className = "heart-box";

    const heart = document.createElement("div");
    heart.className = "heart-shape";

    const content = document.createElement("div");
    content.className = "heart-content";
    content.innerHTML = text.replace(/\n/g, "<br>");

    const closeBtn = document.createElement("button");
    closeBtn.className = "heart-close";
    closeBtn.textContent = "×";

    function close() {
      popup.remove();
      overlay.remove();
    }

    overlay.addEventListener("click", close);
    closeBtn.addEventListener("click", close);

    heart.appendChild(content);
    box.appendChild(heart);
    box.appendChild(closeBtn);
    popup.appendChild(box);
    document.body.appendChild(overlay);
    document.body.appendChild(popup);
  }

  document.getElementById("heart-trigger").addEventListener("click", () => {
    showHeartPopup("make the best of your day — positive vibes");
  });
})();
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("show");
});

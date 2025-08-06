// 🎈 Balloons
const balloonColors = ["#ff4d6d", "#ffafcc", "#cdb4db", "#b5ead7", "#fcd5ce", "#9bf6ff"];

for (let i = 0; i < 20; i++) {
  const b = document.createElement("div");
  b.classList.add("balloon");
  b.style.left = Math.random() * 100 + "vw";
  b.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
  b.style.animationDelay = Math.random() * 5 + "s";
  b.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.body.appendChild(b);
}

// 🎉 Confetti
const confettiColors = ["#ffcf00", "#ff61a6", "#3ec1d3", "#f6a6b2", "#fff", "#a0ffe6"];

for (let i = 0; i < 100; i++) {
  const c = document.createElement("div");
  c.classList.add("confetti");
  c.style.left = Math.random() * 100 + "vw";
  c.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
  c.style.animationDuration = 3 + Math.random() * 2 + "s";
  c.style.animationDelay = Math.random() * 5 + "s";
  document.body.appendChild(c);
}
// Simple glow animation for your name
document.addEventListener("DOMContentLoaded", () => {
  const name = document.querySelector("h1");
  setInterval(() => {
    name.style.textShadow = "0 0 20px #00b4d8, 0 0 30px #00b4d8";
    setTimeout(() => {
      name.style.textShadow = "none";
    }, 500);
  }, 2000);
});

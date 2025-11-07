// Typing effect for subtitle
const text = "Aspiring Cloud / Software Engineer";
let i = 0;
const speed = 80;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
document.addEventListener("DOMContentLoaded", typeWriter);

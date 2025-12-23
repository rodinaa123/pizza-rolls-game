const pizza = document.getElementById("pizza");
const arrowsLeft = document.getElementById("arrowsLeft");
const arrowsRight = document.getElementById("arrowsRight");

const images = [
  "images/pizza-step1.png",
  "images/pizza-step2.png",
  "images/pizza-step3.png",
  "images/pizza-step4.png",
];

let startY = 0;
let isSwiping = false;
let progress = 0;

function handleSwipeStart(y) {
  startY = y;
  isSwiping = true;
}

function handleSwipeMove(y, e) {
  if (!isSwiping) return;

  e.preventDefault();

  const delta = startY - y;
  const distance = 400;

  progress = Math.min(Math.max(delta / distance, 0), 1);

  const step = Math.floor(progress * (images.length - 1));
  pizza.src = images[step];

  const moveY = -80 * progress;

  // Move pizza
  pizza.style.transform = `translateY(${moveY}px)`;

  // Move arrows with parallax effect
  arrowsLeft.style.transform = `translateY(${moveY * 0.35}px)`;
  arrowsRight.style.transform = `translateY(${moveY * 0.35}px)`;
}

function handleSwipeEnd() {
  if (progress >= 1) {
    window.location.href = "sauces.html";
  } else {
    pizza.style.transition = "transform 0.4s ease";
    pizza.style.transform = "translateY(0)";
    arrowsLeft.style.transform = "translateY(0)";
    arrowsRight.style.transform = "translateY(0)";

    setTimeout(() => {
      pizza.src = images[0];
      pizza.style.transition = "";
    }, 400);
  }

  isSwiping = false;
  progress = 0;
}

// Touch events
document.addEventListener("touchstart", e =>
  handleSwipeStart(e.touches[0].clientY), { passive: false });

document.addEventListener("touchmove", e =>
  handleSwipeMove(e.touches[0].clientY, e), { passive: false });

document.addEventListener("touchend", handleSwipeEnd, { passive: false });

// Mouse events (desktop)
document.addEventListener("mousedown", e => handleSwipeStart(e.clientY));
document.addEventListener("mousemove", e => handleSwipeMove(e.clientY, e));
document.addEventListener("mouseup", handleSwipeEnd);

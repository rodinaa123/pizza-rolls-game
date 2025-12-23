

/* --- PAGE ENTRANCE ANIMATION --- */
window.onload = () => {
  const container = document.querySelector(".game-container");
  const title = document.querySelector(".title");
  const pizza = document.getElementById("wrap");
  const sauces = document.querySelector(".sauces");

  // Fade in whole page
  container.style.opacity = "1";
  container.style.transform = "translateY(0)";

  // Title slides from left
  title.style.transform = "translateX(0)";
  title.style.opacity = "1";

  // Pizza slides slightly right
  setTimeout(() => {
    pizza.style.transform = "translateX(120px)";
  }, 300);

  // Sauces slide upward from bottom
  setTimeout(() => {
    sauces.style.transform = "translateY(0)";
    sauces.style.opacity = "1";
  }, 600);
};

// Pick a random offer
function getRandomOffer() {
  return offers[Math.floor(Math.random() * offers.length)];
}

// When clicking a sauce
document.querySelectorAll(".sauce").forEach(sauce => {
  sauce.addEventListener("click", () => {
    const sauceName = sauce.querySelector("p").innerText;
    window.location.href =
      `offer.html?sauce=${encodeURIComponent(sauceName)}`;
  });
});












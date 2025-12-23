const offerText = document.getElementById("offer-text");
const offerPrice = document.getElementById("offer-price");
const redeemBtn = document.getElementById("redeem-btn");

const offers = [
  { text: "10% OFF", price: "ON YOUR ORDER" },
  { text: "20% OFF", price: "ON YOUR ORDER" },
  { text: "30% OFF", price: "ON YOUR ORDER" },
  { text: "GOOD LUCK", price: "NEXT TIME" },
  { text: "GOOD LUCK", price: "NEXT TIME" }
];

// Get last offer index (if any)
let lastOfferIndex = localStorage.getItem("lastOfferIndex");
lastOfferIndex = lastOfferIndex !== null ? Number(lastOfferIndex) : -1;

// Pick a random offer different from last one
let newIndex;
do {
  newIndex = Math.floor(Math.random() * offers.length);
} while (newIndex === lastOfferIndex && offers.length > 1);

// Save current offer index
localStorage.setItem("lastOfferIndex", newIndex);

// Show offer
offerText.innerText = offers[newIndex].text;
offerPrice.innerText = offers[newIndex].price;

redeemBtn.addEventListener("click", () => {
  alert("Offer redeemed 🎉");
});

// OFFERS DATA
const offers = [
  {
    title: "iQOO Z9 5G",
    price: "₹17,999",
    platform: "Amazon",
    url: "https://www.amazon.in"
  },
  {
    title: "Realme Buds Air",
    price: "₹2,499",
    platform: "Flipkart",
    url: "https://www.flipkart.com"
  },
  {
    title: "Redmi Power Bank",
    price: "₹1,199",
    platform: "Amazon",
    url: "https://www.amazon.in"
  }
];

// LOAD OFFERS
function loadOffers() {
  const container = document.getElementById("offers");

  offers.forEach(offer => {
    const div = document.createElement("div");
    div.className = "offer";

    div.innerHTML = `
      <h3>${offer.title}</h3>
      <p class="price">${offer.price}</p>
      <p>Platform: ${offer.platform}</p>
      <a href="${offer.url}" target="_blank">View Deal</a>
    `;

    container.appendChild(div);
  });
}

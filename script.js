// OFFERS DATA (USE AFFILIATE LINKS HERE)
const offers = [
  {
    title: "iQOO Z9 5G",
    price: "₹17,999",
    platform: "Amazon",
    url: "https://amzn.to/your_affiliate_code"
  },
  {
    title: "Realme Buds Air",
    price: "₹2,499",
    platform: "Flipkart",
    url: "https://fkrt.it/your_affiliate_code"
  },
  {
    title: "Redmi Power Bank",
    price: "₹1,199",
    platform: "Amazon",
    url: "https://amzn.to/your_affiliate_code"
  }
];

// LOAD OFFERS
function loadOffers(filter = "All") {
  const container = document.getElementById("offers");
  container.innerHTML = "";

  offers.forEach(offer => {
    if (filter !== "All" && offer.platform !== filter) return;

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

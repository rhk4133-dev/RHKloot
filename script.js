const offers = [
  {
    title: "iQOO Z9 5G",
    price: "₹17,999",
    platform: "Amazon",
    url: "https://amzn.to/your_affiliate"
  },
  {
    title: "Realme Buds Air",
    price: "₹2,499",
    platform: "Flipkart",
    url: "https://fkrt.it/your_affiliate"
  },
  {
    title: "Redmi Power Bank",
    price: "₹1,199",
    platform: "Amazon",
    url: "https://amzn.to/your_affiliate"
  }
];

function loadOffers(filter = "All") {
  const container = document.getElementById("offers");
  container.innerHTML = "";

  offers.forEach(o => {
    if (filter !== "All" && o.platform !== filter) return;

    const div = document.createElement("div");
    div.className = "offer";

    div.innerHTML = `
      <h3>${o.title}</h3>
      <div class="price">${o.price}</div>
      <div class="platform">Platform: ${o.platform}</div>
      <a href="${o.url}" target="_blank">View Deal</a>
    `;

    container.appendChild(div);
  });
}

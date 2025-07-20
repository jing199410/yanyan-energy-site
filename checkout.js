
document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const list = document.getElementById("checkout-items");
  const total = document.getElementById("checkout-total");
  const hiddenField = document.getElementById("cart-field");

  let totalAmount = 0;
  let textSummary = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    list.appendChild(li);
    totalAmount += item.price;
    textSummary += `${item.name} - $${item.price}\n`;
  });

  total.textContent = "總金額：$" + totalAmount;
  hiddenField.value = textSummary + "總金額：$" + totalAmount;
});

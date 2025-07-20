
document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const list = document.getElementById("checkout-items");
  const total = document.getElementById("checkout-total");
  const field = document.getElementById("cart-field");

  let sum = 0;
  let summary = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    list.appendChild(li);
    sum += item.price;
    summary += `${item.name} - $${item.price}\n`;
  });
  total.textContent = "總金額：$" + sum;
  field.value = summary + "總金額：$" + sum;
});

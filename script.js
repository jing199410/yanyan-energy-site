
function addToCart(product, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: product, price: price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " 已加入購物車！");
}

function toggleCart() {
  const modal = document.getElementById("cart-modal");
  if (modal.style.display === "block") {
    modal.style.display = "none";
  } else {
    renderCart();
    modal.style.display = "block";
  }
}

document.getElementById("cart-icon").addEventListener("click", function (e) {
  e.preventDefault();
  toggleCart();
});

function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });
  cartTotal.textContent = "總金額：$" + total;
}

function clearCart() {
  localStorage.removeItem("cart");
  renderCart();
}

function goToCheckout() {
  window.location.href = "checkout.html";
}

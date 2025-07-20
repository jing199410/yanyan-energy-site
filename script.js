
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(name + " 已加入購物車");
}
function toggleCart() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
  renderCart();
}
function renderCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const list = document.getElementById('cart-items');
  const total = document.getElementById('cart-total');
  list.innerHTML = "";
  let sum = 0;
  cart.forEach(item => {
    let li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    list.appendChild(li);
    sum += item.price;
  });
  total.textContent = "總金額：$" + sum;
}
function clearCart() {
  localStorage.removeItem('cart');
  renderCart();
}
function goToCheckout() {
  window.location.href = 'checkout.html';
}
document.getElementById("cart-icon").addEventListener("click", function (e) {
  e.preventDefault();
  toggleCart();
});

const productsData = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Headphones", price: 120 },
  { id: 3, name: "Keyboard", price: 60 }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productsDiv = document.getElementById("products");
const cartUl = document.getElementById("cart");

function renderProducts() {
  productsDiv.innerHTML = "";
  productsData.forEach(p => {
    productsDiv.innerHTML += `
      <div class="col-md-4">
        <div class="card p-3">
          <h5>${p.name}</h5>
          <p>$${p.price}</p>
          <button class="btn btn-primary" onclick="addToCart(${p.id})">
            Add to Cart
          </button>
        </div>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = productsData.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  cartUl.innerHTML = "";
  cart.forEach((item, index) => {
    cartUl.innerHTML += `
      <li class="list-group-item d-flex justify-content-between">
        ${item.name} - $${item.price}
        <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">X</button>
      </li>
    `;
  });
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderProducts();
renderCart();
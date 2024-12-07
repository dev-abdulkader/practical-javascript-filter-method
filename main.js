const products = [
  {
    id: 1,
    title: "Budget Headphones",
    description: "Affordable headphones.",
    price: 30,
  },
  {
    id: 2,
    title: "Portable Charger",
    description: "Compact power bank.",
    price: 45,
  },
  { id: 3, title: "Phone Case", description: "Durable phone case.", price: 25 },
  {
    id: 4,
    title: "Smartwatch",
    description: "Feature-rich smartwatch.",
    price: 75,
  },
  {
    id: 5,
    title: "Wireless Earbuds",
    description: "Noise-cancelling earbuds.",
    price: 90,
  },
  {
    id: 6,
    title: "Bluetooth Speaker",
    description: "Portable speaker.",
    price: 60,
  },
  { id: 7, title: "Tablet", description: "10-inch tablet.", price: 150 },
  {
    id: 8,
    title: "Gaming Headset",
    description: "Surround sound headset.",
    price: 120,
  },
  { id: 9, title: "4K Monitor", description: "Ultra HD monitor.", price: 300 },
  {
    id: 10,
    title: "High-End Laptop",
    description: "Powerful laptop.",
    price: 1200,
  },
];

const productContainer = document.getElementById("product-container");
const filterInputs = document.querySelectorAll('input[name="price"]');
console.log(filterInputs);

function renderProducts(filteredProducts) {
  productContainer.innerHTML = "";
  filteredProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <div class="product-content">
          <h2 class="product-title">${product.title}</h2>
          <p class="product-description">${product.description}</p>
          <p class="product-price">$${product.price}</p>
        </div>
      `;
    productContainer.appendChild(card);
  });
}

// Filter products based on the selected price range
function filterProducts() {
  const selectedValue = document.querySelector(
    'input[name="price"]:checked'
  ).value;

  let filteredProducts = products;

  if (selectedValue === "0-50") {
    filteredProducts = products.filter((p) => p.price <= 50);
  } else if (selectedValue === "50-100") {
    filteredProducts = products.filter((p) => p.price > 50 && p.price <= 100);
  } else if (selectedValue === "100-200") {
    filteredProducts = products.filter((p) => p.price > 100 && p.price <= 200);
  } else if (selectedValue === "200+") {
    filteredProducts = products.filter((p) => p.price > 200);
  }

  renderProducts(filteredProducts);
}

filterInputs.forEach((input) => {
  input.addEventListener("change", filterProducts);
});

renderProducts(products);


const products = [
    { name: "Product 1", price: 50, image: "product1.jpg" },
    { name: "Product 2", price: 60, image: "product2.jpg" },
    { name: "Product 3", price: 70, image: "product3.jpg" },
    { name: "Product 4", price: 80, image: "product4.jpg" },
    { name: "Product 5", price: 90, image: "product5.jpg" }
];

function searchProducts() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

function displayProducts(products) {
    const slider = document.getElementById("productSlider");
    slider.innerHTML = "";

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const productImg = document.createElement("img");
        productImg.src = product.image;
        productImg.alt = product.name;

        const productName = document.createElement("p");
        productName.textContent = product.name;

        productDiv.appendChild(productImg);
        productDiv.appendChild(productName);

        slider.appendChild(productDiv);
    });
}

displayProducts(products);

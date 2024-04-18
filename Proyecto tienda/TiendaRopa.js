const products = [
    { name: "Camisa LaCoste", price: 350, image: "camisa.jpeg", category: "hombre" },
    { name: "Playera Naruto", price: 135, image: "playeraNaruto.jpeg", category: "niño" },
    { name: "Blusa Hello Kitty", price: 198, image: "blusaHelloKitty.jpeg", category: "niña" },
    { name: "Pantalón Gucci", price: 450, image: "Pantalon.jpeg", category: "hombre" },
    { name: "Playera Goku DBZ", price: 150, image: "playeraGoku.jpeg", category: "niño" },
    { name: "Blusa Sirenita", price: 167, image: "blusaSirenita.jpeg", category: "niña" },
    { name: "Camisa Negra Polo", price: 250, image: "camisanegra.jpeg", category: "hombre" },
    { name: "Vestido Floreado", price: 150, image: "vestido.jpeg", category: "mujer" },
    { name: "Playera DBZ Super ", price: 115, image: "playeraDbz.jpeg", category: "niño" },
    { name: "Juego de Corbatas Azules", price: 100, image: "corbatasAzules.jpeg", category: "hombre" },
    { name: "Jeans Leviton", price: 355, image: "jeans.jpeg", category: "mujer" },
    { name: "Calcetas Tecnicas Adidas", price: 155, image: "calcetasAdidas.jpeg", category: "hombre" },
    { name: "Playera Pokémon", price: 135, image: "playeraPokemon.jpeg", category: "niño" },
    { name: "Blusa Vogue Cenicienta", price: 298, image: "blusaCenicienta.jpeg", category: "niña" },
    { name: "Corbata Rosa de Seda con Pines", price: 159, image: "corbataRosa.jpeg", category: "hombre" },
    { name: "Conjunto Converse", price: 200, image: "conjuntoniño.jpeg", category: "niño" },
    { name: "Blusa Bob Esponja", price: 133, image: "BlusaBob.jpeg", category: "niña" },
    { name: "Camisa Azul Slim Fit", price: 170, image: "camisaazul.jpeg", category: "hombre" },
    { name: "Playera Capitán America", price: 155, image: "playeraCapitanA.jpeg", category: "niño" },
    { name: "Blusa Chicas SuperPoderosas", price: 135, image: "blusaChicasS.jpeg", category: "niña" },    
    { name: "Bermuda Tipo Militar", price: 233, image: "bermudaVerde.jpeg", category: "hombre" },
    { name: "Playera Spider-Man", price: 180, image: "playeraspiderman.jpeg", category: "niño" },
    { name: "Sudadera Kuromi", price: 359, image: "sudaderaKuromi.jpeg", category: "niña" },
    { name: "Corbata Marinero Con Pines", price: 265, image: "corbataMarinero.jpeg", category: "hombre" },
    { name: "Pantalón Hello Kitty", price: 135, image: "patalonniña.jpeg", category: "niña" },
    { name: "Bermuda Azul Celeste", price: 239, image: "bermudaAzul.jpeg", category: "hombre" },
    { name: "Playera Iron-Man", price: 155, image: "playeraIronMan.jpeg", category: "niño" },
    { name: "Blusa My Melody", price: 325, image: "blusaMelody.jpeg", category: "niña" },
    { name: "Camisa Tipo Polo", price: 355, image: "camisaVino.jpeg", category: "hombre" },
    { name: "Playera Black Panter", price: 168, image: "playeraPantera.jpeg", category: "niño" },
    { name: "Crop Top Pompompurin", price: 225, image: "blusaPom.jpeg", category: "niña" },
    { name: "Camisa Pol Cotton", price: 275, image: "Camisapolcotton.jpeg", category: "hombre" },
    { name: "Blusa Manga Larga ML", price: 455, image: "blusaML.jpeg", category: "mujer" },
    { name: "Calcetas Tecnicas para Futbol", price: 135, image: "calcetasTecnicas.jpeg", category: "hombre" },
    { name: "Blusa Floreada Gucci", price: 1335, image: "blusaGucci.jpeg", category: "mujer" },    
    { name: "Calcetas Puma", price: 133, image: "CalcetasPuma.jpeg", category: "hombre" },
    { name: "Blusa Elegante Armani", price: 3780, image: "blusaArmani.jpeg", category: "mujer" },
    { name: "Par Calcetas Wilson", price: 210, image: "calcetaWilson.jpeg", category: "hombre" },
    { name: "Jean Gucci", price: 3225, image: "jeanGucci.jpeg", category: "mujer" },
    { name: "Juego de Calcetines Polo", price: 359, image: "calcetaPolo.jpeg", category: "hombre" },
    { name: "Pantalón de Oficina Gucci", price: 2733, image: "pantalonGucci.jpeg", category: "mujer" },
    { name: "Pantalón de Vestir Gianfranco Ferre", price: 1500, image: "pantalonVestir.jpeg", category: "hombre" },
    { name: "Pantalón Tipo Jogger Mezclilla", price: 555, image: "pantalonJogger.jpeg", category: "hombre" },
    { name: "Short para Dama Armani", price: 1500, image: "shortArmani.jpeg", category: "mujer" },
    { name: "Pantalón de Cuadros", price: 450, image: "pantalonCuadros.jpeg", category: "hombre" },
    { name: "Falda de Cuadros", price: 310, image: "falda.jpeg", category: "mujer" },
    { name: "Pants Deportivo Adidas", price: 355, image: "pantsAdidas.jpeg", category: "hombre" },
    { name: "Pants Deportivo Nike", price: 405, image: "pantsNike.jpeg", category: "hombre" },
    { name: "Pants", price: 158, image: "pants.jpeg", category: "hombre" },
    { name: "Short Playero Nike", price: 256, image: "shortNike.jpeg", category: "hombre" },
    { name: "Bermuda Negra", price: 254, image: "bermuda.jpeg", category: "hombre" },
        
];




let currentCategory = null;
let cartItems = [];

// Función para guardar los productos en LocalStorage
function saveProductsToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}

// Función para cargar los productos desde LocalStorage
function loadProductsFromLocalStorage() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
        products.push(...JSON.parse(storedProducts));
    }
}

// Cargar los productos desde LocalStorage al inicio
loadProductsFromLocalStorage();

function loadProducts(category = null) {
    const productList = document.querySelector(".product-list");
    productList.innerHTML = "";

    let filteredProducts = products;

    if (category) {
        filteredProducts = products.filter(product => product.category === category);
    }

    filteredProducts.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement("h3");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = `$${product.price.toFixed(2)}`;

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Agregar al Carrito";
        addToCartButton.classList.add("cart-button");
        addToCartButton.addEventListener("click", () => addToCart(product));

        const buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("buttons");
        buttonsContainer.appendChild(addToCartButton);

        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);

        if (window.location.pathname.includes("admin.html")) {
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Eliminar";
            deleteButton.classList.add("delete-button");
            deleteButton.addEventListener("click", () => deleteProduct(product));
            buttonsContainer.appendChild(deleteButton);
        }

        productItem.appendChild(buttonsContainer);

        productList.appendChild(productItem);
    });
}

function addProduct() {
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const productImageUrl = document.getElementById("productImageUrl").value;
    const productCategory = document.getElementById("productCategory").value;

    if (!productName || !productPrice || !productImageUrl || !productCategory) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const newProduct = {
        name: productName,
        price: parseFloat(productPrice),
        image: productImageUrl,
        category: productCategory
    };

    products.push(newProduct);
    saveProductsToLocalStorage(); // Guardar los productos después de agregar uno nuevo
    alert("Producto agregado correctamente.");
    document.getElementById("addProductForm").reset();
    redirectToCustomerPage(); // Redirigir al usuario a la página del cliente
    loadProducts(); // Actualizar la lista de productos en la página del cliente
}

function showCustomerPage() {
    document.getElementById("customerPage").classList.remove("hidden");
    document.getElementById("options").classList.add("hidden");
    document.getElementById("header").classList.add("hidden");

    document.getElementById("navbar").classList.remove("hidden");
    document.getElementById("cart").classList.remove("hidden");

    loadProducts();
}

function showCategory(category) {
    currentCategory = category;
    loadProducts(category);
}

function addToCart(product) {
    cartItems.push(product);
    localStorage.setItem('selectedProduct', JSON.stringify(product)); // Agregar el producto al localStorage
    alert(`Se agregó "${product.name}" al carrito.`);
    window.location.href = "carrito.html";
}


function deleteProduct(product) {
    const confirmDelete = confirm(`¿Estás seguro de que deseas eliminar "${product.name}"?`);
    if (confirmDelete) {
        const index = products.findIndex(item => item.name === product.name);
        if (index !== -1) {
            products.splice(index, 1);
            saveProductsToLocalStorage(); // Guardar los productos después de eliminar uno
            alert("Producto eliminado correctamente.");
            redirectToCustomerPage(); // Redirigir al usuario a la página del cliente
            loadProducts(); // Actualizar la lista de productos en la página del cliente
        } else {
            alert("No se encontró el producto para eliminar.");
        }
    }
}

function goToCart() {
    window.location.href = "carrito.html";
}

function showAdminLogin() {
    document.getElementById("adminLogin").classList.remove("hidden");
    document.getElementById("customerPage").classList.add("hidden");
    document.getElementById("options").classList.add("hidden");

    document.getElementById("navbar").classList.add("hidden");
    document.getElementById("cart").classList.add("hidden");

    const loginButton = document.getElementById("loginButton");
    loginButton.addEventListener("click", loginAdmin);
}

function loginAdmin() {
    const adminUsername = document.getElementById("adminUsername").value;
    const adminPassword = document.getElementById("adminPassword").value;

    if (adminUsername === "ADMIN" && adminPassword === "12345") {
        alert("Inicio de sesión exitoso como ADMIN.");
        window.location.href = "admin.html"; // Redirigir a la página del administrador
    } else {
        alert("Contraseña o Usuario incorrectos. Inténtalo de nuevo.");
    }
}

function redirectToCustomerPage() {
    window.location.href = "TiendaRopa.html";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("navbar").classList.add("hidden");
    loadProducts(); // Cargar los productos al inicio
});

// Función para mostrar los productos en el carrito
function showCartItems() {
    const cartItemsList = document.getElementById("cartItemsList");
    cartItemsList.innerHTML = ""; // Limpiar el contenedor del carrito

    cartItems.forEach(item => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");

        const productImage = document.createElement("img");
        productImage.src = item.image;
        productImage.alt = item.name;
        productImage.classList.add("product-image");

        const productName = document.createElement("p");
        productName.textContent = item.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = `$${item.price.toFixed(2)}`;

        const quantitySelect = document.createElement("select");
        quantitySelect.addEventListener("change", () => updateQuantity(item, quantitySelect.value));
        for (let i = 1; i <= 10; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            quantitySelect.appendChild(option);
        }

        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);
        productItem.appendChild(quantitySelect);

        cartItemsList.appendChild(productItem);
    });
}

// Función para actualizar la cantidad de un producto en el carrito
function updateQuantity(item, quantity) {
    item.quantity = Number(quantity);
    updateCartTotal();
}

// Función para actualizar el total del carrito
function updateCartTotal() {
    const cartTotal = document.getElementById("cartTotal");
    let total = 0;

    cartItems.forEach(item => {
        total += item.price * item.quantity;
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Función para procesar el pago y vaciar el carrito
function checkout() {
    cartItems = []; // Vaciar el array del carrito al procesar el pago

    // Actualizar el total del carrito y mostrar la información
    updateCartTotal();
    showCartItems();

    alert("Pago procesado correctamente. ¡Gracias por su compra!");
}

// Se ejecuta al cargar la página del carrito
document.addEventListener("DOMContentLoaded", function() {
    showCartItems();
    updateCartTotal();
});

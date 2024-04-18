// Se ejecuta al cargar la página del carrito
document.addEventListener("DOMContentLoaded", function() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

    if (selectedProduct) {
        addToCart(selectedProduct); // Agregar el producto al carrito si está seleccionado
    }

    if (cartItems && cartItems.length > 0) {
        showCartItems(cartItems);
    } else {
        const cartItemsList = document.getElementById("cartItemsList");
        cartItemsList.innerHTML = "<p>No hay productos en el carrito.</p>";
        const cartTotal = document.getElementById("cartTotal");
        cartTotal.textContent = "Total: $0.00";
    }

    const checkoutBtn = document.getElementById("checkoutBtn");
    checkoutBtn.addEventListener("click", checkout);
});

// Función para agregar un producto al carrito
function addToCart(product) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Obtener el carrito actual o inicializarlo como un array vacío

    // Verificar si el producto ya está en el carrito
    const existingProduct = cartItems.find(item => item.name === product.name);
    if (existingProduct) {
        alert(`El producto "${product.name}" ya está en el carrito.`);
        return;
    }

    cartItems.push(product); // Agregar el producto al carrito
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Guardar el carrito en el almacenamiento local
    showCartItems(cartItems); // Mostrar los productos en el carrito
}

// Función para mostrar los productos en el carrito
function showCartItems(cartItems) {
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

        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.value = item.quantity || 1; // Valor predeterminado de la cantidad
        quantityInput.min = 1; // Valor mínimo de la cantidad
        quantityInput.classList.add("quantity-input");
        quantityInput.addEventListener("input", function() {
            updateCartItemQuantity(item, parseInt(quantityInput.value));
        });

        const closeButton = document.createElement("button");
        closeButton.textContent = "X";
        closeButton.classList.add("close-button");
        closeButton.addEventListener("click", function() {
            removeCartItem(item);
        });

        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);
        productItem.appendChild(quantityInput);
        productItem.appendChild(closeButton);

        cartItemsList.appendChild(productItem);
    });

    updateCartTotal(cartItems);
}

// Función para actualizar la cantidad de un producto en el carrito
function updateCartItemQuantity(item, quantity) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Obtener el carrito actual o inicializarlo como un array vacío

    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.name === item.name);
    if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity = quantity;
        localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Actualizar la cantidad en el almacenamiento local
        showCartItems(cartItems); // Mostrar los productos actualizados en el carrito
    }
}

// Función para eliminar un producto del carrito
function removeCartItem(item) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Obtener el carrito actual o inicializarlo como un array vacío

    cartItems = cartItems.filter(cartItem => cartItem.name !== item.name); // Filtrar el producto a eliminar
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Actualizar el carrito en el almacenamiento local
    showCartItems(cartItems); // Mostrar los productos actualizados en el carrito
}

// Función para actualizar el total del carrito
function updateCartTotal(cartItems) {
    const cartTotal = document.getElementById("cartTotal");
    let total = 0;

    cartItems.forEach(item => {
        total += item.price * (item.quantity || 1); // Multiplicar el precio por la cantidad (si la cantidad no está definida, se toma como 1)
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Función para procesar el pago y vaciar el carrito
function checkout() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (cartItems && cartItems.length > 0) {
        // Procesar el pago aquí (simulación de pago)
        alert("Pago procesado correctamente. ¡Gracias por su compra!");

        // Vaciar el carrito después de procesar el pago
        localStorage.removeItem('cartItems');
        showCartItems([]); // Actualizar la vista del carrito vacío
    } else {
        alert("No hay productos en el carrito para procesar el pago.");
    }
}

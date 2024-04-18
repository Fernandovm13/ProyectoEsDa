// Variable para almacenar los productos (puedes cargarla desde LocalStorage si lo deseas)
let products = [];

// Función para guardar los productos en LocalStorage
function saveProductsToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}

// Función para cargar los productos desde LocalStorage
function loadProductsFromLocalStorage() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
        products = JSON.parse(storedProducts);
    }
}

// Cargar los productos desde LocalStorage al inicio
loadProductsFromLocalStorage();

// Función para agregar un nuevo producto desde el formulario de administrador
function addProductAdmin() {
    const productName = document.getElementById("adminProductName").value;
    const productPrice = parseFloat(document.getElementById("adminProductPrice").value);
    const productImage = document.getElementById("adminProductImage").files[0];
    const productCategory = document.getElementById("adminProductCategory").value;

    if (!productName || !productPrice || !productImage || !productCategory) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const imageUrl = event.target.result;

        const newProduct = {
            name: productName,
            price: productPrice,
            image: imageUrl,
            category: productCategory
        };

        products.push(newProduct);
        saveProductsToLocalStorage(); // Guardar los productos después de agregar uno nuevo
        alert("Producto agregado correctamente.");
        document.getElementById("addProductForm").reset();
        loadProductsAdmin(); // Recargar la lista de productos en la página de administrador
    };
    reader.readAsDataURL(productImage);
}

// Función para eliminar un producto
function deleteProductAdmin(productName) {
    const confirmDelete = confirm(`¿Estás seguro de que deseas eliminar "${productName}"?`);
    if (confirmDelete) {
        const index = products.findIndex(item => item.name === productName);
        if (index !== -1) {
            products.splice(index, 1);
            saveProductsToLocalStorage(); // Guardar los productos después de eliminar uno
            alert("Producto eliminado correctamente.");
            loadProductsAdmin(); // Recargar la lista de productos en la página de administrador
        } else {
            alert("No se encontró el producto para eliminar.");
        }
    }
}

// Función para cargar los productos en la página del administrador y mostrar el botón de eliminar
function loadProductsAdmin() {
    const productListAdmin = document.getElementById("productListAdmin");
    productListAdmin.innerHTML = "";

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-admin");

        const productName = document.createElement("span");
        productName.textContent = product.name;

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", () => deleteProductAdmin(product.name));

        productItem.appendChild(productName);
        productItem.appendChild(productImage);
        productItem.appendChild(deleteButton);

        productListAdmin.appendChild(productItem);
    });
}

// Cargar los productos al inicio
loadProductsAdmin();

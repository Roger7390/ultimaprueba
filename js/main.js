document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('searchBar');
    const products = document.querySelectorAll('.producto');
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.closeBtn');

    searchBar.addEventListener('keyup', function (e) {
        const searchString = e.target.value.toLowerCase();
        products.forEach(product => {
            const productName = product.getAttribute('data-name');
            if (productName.includes(searchString)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });

    document.querySelectorAll('.detailsBtn').forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-id');

            // Simula los datos de los productos para el modal
            const productos = [
                { id: 1, nombre: 'Producto 1', imagen: 'path/to/image1.jpg', descripcion: 'Descripción del producto 1', precio: '100' },
                { id: 2, nombre: 'Producto 2', imagen: 'path/to/image2.jpg', descripcion: 'Descripción del producto 2', precio: '200' }
                // Añadir más productos si es necesario
            ];

            // Encuentra el producto por ID
            const producto = productos.find(p => p.id == productId);

            if (producto) {
                document.getElementById('modalTitle').innerText = producto.nombre;
                document.getElementById('modalImage').src = producto.imagen;
                document.getElementById('modalDescription').innerText = producto.descripcion;
                document.getElementById('modalPrice').innerText = `$${producto.precio}`;
                modal.style.display = 'block';
            }
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});

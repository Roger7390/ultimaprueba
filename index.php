<?php
include 'templates/header.php';

// Simula los datos de productos
$productos = [
    [
        'id' => 1,
        'nombre' => 'Producto 1',
        'imagen' => 'path/to/image1.jpg',
        'descripcion' => 'Descripción del producto 1',
        'precio' => '100'
    ],
    [
        'id' => 2,
        'nombre' => 'Producto 2',
        'imagen' => 'path/to/image2.jpg',
        'descripcion' => 'Descripción del producto 2',
        'precio' => '200'
    ],
    // Añadir más productos si es necesario
];
?>

<h1>Catálogo de Productos</h1>
<input type="text" id="searchBar" placeholder="Buscar productos...">

<div class="productos">
    <?php foreach($productos as $producto): ?>
        <div class="producto" data-name="<?php echo strtolower($producto['nombre']); ?>">
            <img src="<?php echo $producto['imagen']; ?>" alt="<?php echo $producto['nombre']; ?>">
            <h2><?php echo $producto['nombre']; ?></h2>
            <p><?php echo $producto['descripcion']; ?></p>
            <p>$<?php echo $producto['precio']; ?></p>
            <button class="detailsBtn" data-id="<?php echo $producto['id']; ?>">Ver detalles</button>
        </div>
    <?php endforeach; ?>
</div>

<div id="productModal" class="modal">
    <div class="modal-content">
        <span class="closeBtn">&times;</span>
        <h2 id="modalTitle"></h2>
        <img id="modalImage" src="" alt="">
        <p id="modalDescription"></p>
        <p id="modalPrice"></p>
    </div>
</div>

<?php include 'templates/footer.php'; ?>

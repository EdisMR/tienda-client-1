<?php
sessionVerifier();
?>
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Panel de administración</title>
		<?php htmlHead(); ?>
		<link rel="stylesheet" href="/admin/index/sass/compiled/compiled.css">
		<script defer src="/admin/index/script/mainIndex.js"></script>
	</head>
	<body>
		<?php htmlHeader(); ?>
		<main>
      <div class="main-title">
        <h1>
					Inicio
				</h1>
			</div>


			<div class="enlaces-main">


      <div class="grid-container-menu">


      <div class="item-main-menu"><a href="/admin/lista/?ver=productos">Productos</a></div>
      <div class="item-main-menu"><a href="/admin/lista/?ver=ventas">Ventas</a></div>
      <div class="item-main-menu"><a href="/admin/detalle-negocio/">Negocio</a></div>
      <div class="item-main-menu"><a href="https://google.com" target="_blank" rel="noopener noreferrer">Tienda</a></div>

      </div>


      </div>
		</main>
    <?php htmlFooter(); ?>
	</body>
</html>

<?php require "../global/includes.php"; ?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Lista de productos</title>
	<?php htmlHead(); ?>
	<script src="script/script.js" defer></script>
	<link rel="stylesheet" href="./sass/compiled/compiled.css">
</head>

<body>
	<?php htmlHeader(); ?>
	<main>
		<div class="main-title">
			<h1>
				Lista de Productos
			</h1>
		</div>
		<section class="tableContainer">
			<table>
				<thead>
					<th>N°</th>
					<th>Id</th>
					<th>Titulo</th>
					<th>Descripcion</th>
					<th>Valor</th>
					<th>Categoria</th>
					<th>Mostrar</th>
				</thead>
				<tbody>
				</tbody>
			</table>
		</section>

	</main>
</body>

</html>
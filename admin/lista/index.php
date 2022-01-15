<?php require "../global/includes.php";
$ver = $_GET["ver"];
$tituloPagina;
if($ver=="productos"){
	$tituloPagina="Lista de Productos";
}
if($ver=="ventas"){
	$tituloPagina="Lista de Ventas";
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php htmlHead(); ?>
	<link rel="stylesheet" href="./sass/compiled/compiled.css">
	<title><?php print $tituloPagina; ?></title>
	

	<?php
	if ($ver == "productos") {
	?>
		<script src="./script/productos.js" defer></script>
		<?php
	} else {
		if ($ver == "ventas") {
		?>
			<script src="./script/ventas.js" defer></script>
	<?php
		}
	}
	?>
	<script src="./script/script.js" defer></script>


</head>

<body>
	<?php htmlHeader(); ?>
	<main>
		<div class="main-title">
			<h1>
			<?php print $tituloPagina;?>. Página <span></span>
			</h1>
		</div>

		<?php
		if ($ver == "productos") {
		?>
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

			<?php
		} else {
			if ($ver == "ventas") {
			?>

				<section class="tableContainer">
					<table>
						<thead>
							<th>N°</th>
							<th>ID</th>
							<th>Nombre</th>
							<th>Telefono</th>
							<th>Total</th>
							<th>Entregado</th>
							<th>Notas</th>
						</thead>
						<tbody>
						</tbody>
					</table>
				</section>
		<?php
			}
		}
		?>

<div class="moreResultsButton">
	<button id="lastResultsBTN">Anteriores</button>
	<button id="moreResultsBTN">Siguientes</button>
</div>

	</main>
</body>

</html>
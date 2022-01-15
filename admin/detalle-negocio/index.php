<?php require "../global/includes.php";?>

<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Detalle del negocio</title>
	<link rel="stylesheet" href="./sass/compiled/compiled.css">
	<script src="/admin/detalle-negocio/script/main.js"></script>
	<?php htmlHead(); ?>
</head>
<body>
	<?php htmlHeader(); ?>
	<main>
	<div class="main-title">
				<h1>
					Detalles del Negocio
				</h1>
			</div>


			<div class="formContainer">
			<form>
				<div class="block">
					<div class="inputContainer">
						<span>Nombre del negocio: </span><input required type="text" name="nombrenegocio">
					</div>
					<div class="inputContainer">
						<span>Telefono de WhatsApp: </span><input required type="text" name="telefonowspp">
					</div>
					<!-- <div class="inputContainer">
						<span>Usuario: </span><input required type="text" name="usuario">
					</div>
					<div class="inputContainer">
						<span>Contraseña: </span><input required type="text" name="contrasenia">
					</div> -->
				</div>
			</form>
			</div>

			<div class="buttonContainer">
				<button id="sendData">Enviar Datos</button>
			</div>
	</main>
</body>
</html>
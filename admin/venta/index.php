<?php require "../global/includes.php";?>

<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Detalle de Venta</title>
	<script src="./script/main.js" defer></script>
	<link rel="stylesheet" href="./sass/compiled/compiled.css">
	<?php htmlHead(); ?>
</head>
<body>
	<?php htmlHeader(); ?>
	<main>
	<div class="main-title">
				<h1>
					Detalle de Venta
				</h1>
			</div>

			<div class="formContainer">
				<form>
					<div class="block">
						<div class="inputContainer">
							<span>ID: </span><input required autocomplete="off" type="text" name="idaleatorio">
						</div>
					</div>
					<div class="block">
						<div class="inputContainer">
							<span>Nombre: </span><input required autocomplete="off" type="text" name="nombre">
						</div>
					</div>
					<div class="block">
						<div class="inputContainer">
							<span>Telefono: </span><input required autocomplete="off" type="tel" name="telefono">
						</div>
					</div>
					<div class="block">
						<div class="inputContainer">
							<span>Total: </span><input required autocomplete="off" type="text" name="total">
						</div>
					</div>
					<div class="block">
						<div class="inputContainer">
							<span>Entregado: </span><input required type="checkbox" checked name="entregado">
						</div>
					</div>
					<div class="block">
						<div class="inputContainer">
							<span>Notas:  </span><textarea required name="notas"></textarea>
						</div>
					</div>
					<div class="block">
						<div class="inputContainer">
							<span>Productos:  </span><input required autocomplete="off" name="productos" type="text">
						</div>
					</div>
				</form>

			</div>

			<div id="productDetails">
				
			</div>
			
			<div class="buttonsContainer">
				<button id="sendData">Editar esta Venta</button>
		</div>
		
	</main>
</body>
</html>
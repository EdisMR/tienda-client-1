<?php require "../global/includes.php"; ?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Crear producto</title>
	<?php htmlHead(); ?>
	<link rel="stylesheet" href="./sass/compiled/compiled.css">
	<script defer src="./script/script.js"></script>
</head>

<body>
	<?php htmlHeader(); ?>
	<main>
		<div class="main-title">
			<h1>
				Crear un Producto
			</h1>
		</div>


		<div class="flex-center">
			<div class="inputs">
				<form autocomplete="off" id="mainform">
					<div class="inputContainer">
						<div class="inputDescription">ID:&nbsp;&nbsp;</div>
						<div class="inputData">
							<input type="text" autocomplete="off" name="prodid" disabled style="font-family: monospace;">
						</div>
					</div>
					<div class="inputContainer">
						<div class="inputDescription">Título:&nbsp;&nbsp;</div>
						<div class="inputData">
							<input type="text" autocomplete="off" name="titulo" required maxlength="70">
						</div>
					</div>
					<div class="inputContainer">
						<div class="inputDescription">Descripción:&nbsp;&nbsp;</div>
						<div class="inputData">
							<textarea  required type="text" autocomplete="off" name="descripcion" max="600"></textarea>
						</div>
					</div>
					<div class="inputContainer">
						<div class="inputDescription">Valor de C/U:&nbsp;&nbsp;</div>
						<div class="inputData">
							<input  required type="number" min="0" name="valor">
						</div>
					</div>
					<div class="inputContainer">
						<div class="inputDescription">Cantidad:&nbsp;&nbsp;</div>
						<div class="inputData">
							<input  required type="number" min="0" step="1" name="cantidad">
						</div>
					</div>
					<div class="inputContainer">
						<div class="inputDescription">Categoría:&nbsp;&nbsp;</div>
						<div class="inputData">
							<input  required type="text" autocomplete="off" name="categoria" pattern="([A-Za-z]*\s{0,1}[,]{0,1})*">
						</div>
					</div>
					<div class="inputContainer">
						<div class="inputDescription">¿Disponible?:&nbsp;&nbsp;</div>
						<div class="inputData">
							<input  required type="checkbox" name="disponible" checked>
						</div>
					</div>
					<div class="inputContainer">
						<div class="inputDescription">Imágenes:&nbsp;&nbsp;</div>
						<div class="inputData">
							<input  required type="text" autocomplete="off" name="imagenes" disabled value="" contenteditable="false" maxlength="255">
						</div>
					</div>

				</form>
			</div>

			<div class="images-container">
				<div class="images-grid-container">
					<div class="image-grid-item">
						<!-- img insertada con JS -->
						<button class="deleteImage"><span class="ms-Icon root-43" data-icon-name="Delete"></span></button>
					</div>
					<div class="image-grid-item">
						<button class="deleteImage"><span class="ms-Icon root-43" data-icon-name="Delete"></span></button>
					</div>
					<div class="image-grid-item">
						<button class="deleteImage"><span class="ms-Icon root-43" data-icon-name="Delete"></span></button>
					</div>
					<div class="image-grid-item">
						<button class="deleteImage"><span class="ms-Icon root-43" data-icon-name="Delete"></span></button>
					</div>
				</div>
			</div>

		<div class="addImageContainer">
			<form autocomplete="off" id="imageUploader">
				<input type="file" name="imagen" accept="image/png, image/jpeg, image/webp, image/jpg">
			</form>
		</div>

		<section class="block">
			<div class="sendButtonContainer">
				<button id="sendData" class="sendbutton">Enviar Datos</button>
				<button id="resetMainForm">Resetear formulario</button>
			</div>
		</section>
	</main>
</body>

</html>
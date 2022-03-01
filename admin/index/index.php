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

      <button id="closeSession">Cerrar Sesión</button>

		</main>
    <?php htmlFooter(); ?>
	</body>
</html>

<?php
require "../global/includes.php";
session_start();

if(isset($_SESSION["user"])){
  header("Location:/admin/");
}else{

}

?>

<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Iniciar Sesión</title>
    <link rel="stylesheet" href="./sass/compiled/compiled.css">
		<?php htmlHead(); ?>
    <script defer src="./script/login.js"></script>
	</head>
	<body>
		<main>
			<div class="main-title">
				<h1>
					Iniciar Sesión
				</h1>
			</div>

      <div class="sessionContainer">
        <div>
          <form autocomplete="off">
            <div class="inputContainer">
              <span>Usuario:&nbsp;&nbsp;</span>
              <input type="text" name="usuario" required>
            </div>
            <div class="inputContainer">
              <span>Contraseña:&nbsp;&nbsp;</span>
              <input type="password" name="contrasenia" id="passwordInput" required>
              <span id="passwordSwitch">&#x22B7;</span>
            </div>
            <div>
              <button id="sendInfo">Continuar</button>
            </div>
          </form>
        </div>
      </div>
		</main>
    <?php htmlFooter();?>
	</body>
</html>

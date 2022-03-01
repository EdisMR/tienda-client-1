<?php
require_once "../../common-scripts/conectarbd.php";

if (isset($_POST["type"])) {
  if ($_POST["type"] == "validate") {
    validate();
  }
  if ($_POST["type"] == "update") {
    update();
  }
  if ($_POST["type"] == "finish") {
    closeSession();
  }
}


function validate(){
  $usuario = $_POST["usuario"];
  $contrasenia = $_POST["contrasenia"];

  $query = mysqli_query($GLOBALS["conn"], "SELECT * FROM usuarios WHERE usuario = '$usuario' AND contrasenia = '$contrasenia'");

  // esto válida si la consulta se ejecuto correctamente o no
  // pero en ningún caso válida si devolvió algún registro
  if ($query) {
    if ($user = mysqli_fetch_assoc($query)) {
      // el usuario y la pwd son correctas
      session_start();
      $_SESSION["user"] = "admin";
      echo 1;
    } else {
      // Usuario incorrecto o no existe
      echo 0;
    }
  }
}


function update()
{
}


function closeSession(){
  session_start();
  // remove all session variables
  session_unset();

  // destroy the session
  session_destroy();
}

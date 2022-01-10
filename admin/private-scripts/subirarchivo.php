<?php
require "../../common-scripts/conectarbd.php";

$MAXsIZE = 2000000;
$directory = "/images";

/* New Name for the file */

/* Imagen recibida */
if($_FILES["imagen"]["size"]>0){
	$newname = $_POST["newname"];
	$fileInput=$_FILES["imagen"];
}

/* Capturar extension del archivo */
$arrayString = explode(".", $fileInput["name"]);
$extension = end($arrayString);

$newRoute = "../../images/$newname.$extension";

move_uploaded_file($fileInput['tmp_name'], $newRoute);

print "$newname.$extension";

mysqli_close($conn);
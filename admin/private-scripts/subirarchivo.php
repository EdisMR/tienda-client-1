<?php

$MAXsIZE = 2000000;
$directory = "/images";

/* New Name for the file */
$newname = $_POST["newname"];

/* Imagen recibida */
$fileInput=$_FILES["imagen"];

/* Capturar extension del archivo */
$arrayString = explode(".", $fileInput["name"]);
$extension = end($arrayString);

$newRoute = "../../images/$newname.$extension";

move_uploaded_file($fileInput['tmp_name'], $newRoute);

print "$newname.$extension";
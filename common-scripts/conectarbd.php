<?php
header('Access-Control-Allow-Origin: *');

$conn=mysqli_connect(
	"localhost",
	"root",
	"",
	"tienda"
);

$tablaProductos="productos";
$tablaVentas="compra";
$tablaSistema="sistema";

?>

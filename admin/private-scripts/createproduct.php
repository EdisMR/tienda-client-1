<?php
require "../../common-scripts/conectarbd.php";


$prodid=$_POST["prodid"];
$titulo=$_POST["titulo"];
$descripcion=$_POST["descripcion"];
$valor=$_POST["valor"];
$cantidad=$_POST["cantidad"];
$categoria=$_POST["categoria"];
$disp=$_POST["disponible"];
$imagenes=$_POST["imagenes"];
$disponible;
if($disp=="on"){
	$disponible=true;
}
if($disp=="off"){
	$disponible=false;
}


$sqlQueryNewProduct="INSERT INTO `$tablaProductos` (`idaleatorio`, `titulo`, `descripcion`, `valor`, `cantidad`, `categoria`, `imagenes`, `disponible`) VALUES ('$prodid', '$titulo', '$descripcion', '$valor', '$cantidad', '$categoria', '$imagenes', '$disponible')";

if (mysqli_query($conn, $sqlQueryNewProduct)) {
	echo "New record created successfully";
} else {
	echo "Error: ". mysqli_error($conn);
}
mysqli_close($conn);

?>
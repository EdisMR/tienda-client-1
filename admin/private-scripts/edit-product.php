<?php
require "../../common-scripts/conectarbd.php";


$prodid=$_POST["prodid"];
$titulo=$_POST["titulo"];
$descripcion=$_POST["descripcion"];
$valor=$_POST["valor"];
$cantidad=$_POST["cantidad"];
$categoria=$_POST["categoria"];
$disp=((bool) $_POST["disponible"]);
$imagenes=$_POST["imagenes"];

$disponible;
if($disp){
	$disponible=1;
}else{
	$disponible=0;
}

$sqlQueryEditProduct="UPDATE `$tablaProductos` SET `titulo` = '$titulo', `descripcion` = '$descripcion', `valor` = '$valor', `cantidad` = '$cantidad', `categoria` = '$categoria', `imagenes` = '$imagenes', `disponible` = '$disponible' WHERE `$tablaProductos`.`idaleatorio`='$prodid' ";

if (mysqli_query($conn, $sqlQueryEditProduct)) {
	echo "Succesfully modified";
} else {
	echo "Error: ". mysqli_error($conn);
}
mysqli_close($conn);

?>
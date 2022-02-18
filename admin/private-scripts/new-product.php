<?php
require "../../common-scripts/conectarbd.php";


$prodid=$_POST["prodid"];
$titulo=$_POST["titulo"];
$descripcion=$_POST["descripcion"];
$valor=$_POST["valor"];
$cantidad=$_POST["cantidad"];
$categoria=$_POST["categoria"];
$imagenes=$_POST["imagenes"];

$disp;
$disponible;

if(isset($_POST["disponible"])){
	$disp=((bool) $_POST["disponible"]);
	if($disp){
		$disponible=1;
	}
}else{
	$disponible=0;
}

$sqlQueryNewProduct="INSERT INTO `$tablaProductos` (`idaleatorio`, `titulo`, `descripcion`, `valor`, `cantidad`, `categoria`, `imagenes`, `disponible`) VALUES ('$prodid', '$titulo', '$descripcion', '$valor', '$cantidad', '$categoria', '$imagenes', '$disponible')";

if (mysqli_query($conn, $sqlQueryNewProduct)) {
	echo "New record created successfully";
} else {
	echo "Error: ". mysqli_error($conn);
}
mysqli_close($conn);

?>
<?php
require "../../common-scripts/conectarbd.php";

$nombre=$_POST["nombre"];
$telefono=$_POST["telefono"];
$total=intval($_POST["total"]);
$notas=$_POST["notas"];
$productos=$_POST["productos"];
$idaleatorio=$_POST["idaleatorio"];


$entregado;
if($_POST["entregado"]=="true"){
  $entregado=1;
}
if($_POST["entregado"]=="false"){
  $entregado=0;
}

$query = "UPDATE `$tablaVentas` SET `nombre` = '$nombre', `telefono` = '$telefono', `total` = '$total', `entregado` = '$entregado', `notas` = '$notas', `productos` = '$productos', `idaleatorio` = '$idaleatorio' WHERE `$tablaVentas`.`idaleatorio` = '$idaleatorio'";

if($conn -> query( $query ) === TRUE){
	echo "1";
}else{
	echo "0";
}

mysqli_close($conn);

?>

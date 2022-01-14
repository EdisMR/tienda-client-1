<?php
require "../../common-scripts/conectarbd.php";

/* Solicitar productid por get */
$ventaRequest=$_GET["ventaid"];

$query = "SELECT * FROM `$tablaVentas` WHERE `idauto`='$ventaRequest'";

$result = mysqli_query($conn, $query);

$myArray=array();
while($row = mysqli_fetch_assoc($result)) {
	$myArray[] = $row;
}

echo json_encode($myArray);

mysqli_close($conn);
?>
<?php
require "conectarbd.php";

/* Solicitar productid por get */
$productRequest=$_GET["productid"];

$query = "SELECT * FROM `productos` WHERE `idaleatorio`='$productRequest'
";

$result = mysqli_query($conn, $query);

$myArray=array();
while($row = mysqli_fetch_assoc($result)) {
	$myArray[] = $row;
}

echo json_encode($myArray);

mysqli_close($conn);
?>
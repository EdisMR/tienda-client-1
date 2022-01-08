<?php
require "../conectarbd.php";

$cuantos=25;

$query="select * from $tablaProductos";

$result=mysqli_query($conn,$query);

while($row=mysqli_fetch_array($result)){
	$myArray[]=$row;
}

echo json_encode($myArray);

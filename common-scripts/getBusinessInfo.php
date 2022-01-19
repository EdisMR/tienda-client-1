<?php
require "conectarbd.php";

$query = "SELECT * FROM `$tablaSistema` WHERE `idauto`='1'
";

$result = mysqli_query($conn, $query);

$myArray=array();
while($row = mysqli_fetch_assoc($result)) {
	$myArray[] = $row;
}

echo json_encode($myArray);

mysqli_close($conn);
?>
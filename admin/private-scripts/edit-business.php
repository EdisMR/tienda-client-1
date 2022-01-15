<?php
require "../../common-scripts/conectarbd.php";

$nombrenegocio=$_POST["nombrenegocio"];
$telefonowspp=$_POST["telefonowspp"];

$query = "UPDATE `$tablaSistema` SET `nombrenegocio` = '$nombrenegocio', `telefonowspp` = '$telefonowspp' WHERE `$tablaSistema`.`idauto` = 1";

if($conn -> query( $query ) === TRUE){
	echo "1";
}else{
	echo "0";
}

mysqli_close($conn);
?>
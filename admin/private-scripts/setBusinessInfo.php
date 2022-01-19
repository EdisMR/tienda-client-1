<?php
require "../../common-scripts/conectarbd.php";

$telefonowspp=$_POST["telefonowspp"];
$nombrenegocio=$_POST["nombrenegocio"];

$query = "UPDATE `$tablaSistema` SET `nombrenegocio` = '$nombrenegocio', `telefonowspp` = '$telefonowspp' WHERE `$tablaSistema`.`idauto` = 1";

if($conn -> query( $query ) === TRUE){
	echo "1";
}else{
	echo "0";
}

mysqli_close($conn);
?>
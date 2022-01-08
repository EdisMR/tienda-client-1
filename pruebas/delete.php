<?php

$item=$_POST["item"];
$rutaEliminar="../images/$item";

if(unlink($rutaEliminar)){
	print "eliminado $item";
}else{
	print "nope";
}


?>
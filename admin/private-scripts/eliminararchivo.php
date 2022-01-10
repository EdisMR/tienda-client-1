<?php

$imageURL=$_POST["imagenEliminar"];
$rutaEliminar="../../images/$imageURL";

if(unlink($rutaEliminar)){
	print "eliminado $imageURL";
}else{
	print "nope";
}

mysqli_close($conn);
?>
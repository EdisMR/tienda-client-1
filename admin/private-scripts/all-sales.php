<?php
require "../../common-scripts/conectarbd.php";

$cuantos = 25;

/* Numero que indica la pagina de resultados que se esta viendo */
/* http://localhost/common-scripts/ver-n-prod.php/?actual=0 */
$MostradoActual = $_GET["page"];

$inicioQuery = $cuantos * (intval($MostradoActual)-1);

$query = "select * from $tablaVentas LIMIT $cuantos OFFSET $inicioQuery";

$result = mysqli_query($conn, $query);

$myArray=array();
while($row = mysqli_fetch_assoc($result)) {
	$myArray[] = $row;
}

echo json_encode($myArray);

mysqli_close($conn);
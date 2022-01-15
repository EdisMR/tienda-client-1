<?php
require "./conectarbd.php";

$idaleatorio=$_POST["idaleatorio"];/* string */
$nombre=$_POST["nombre"];/* string */
$telefono=$_POST["telefono"];/* string */
$total=$_POST["total"];/* string */
$entregado=$_POST["entregado"];/* numero 1/0 */
$notas=$_POST["notas"];/* string */
$productos=$_POST["productos"];/* JSON codificado adecuadamente */

$sqlQueryNewSell="INSERT INTO `$tablaVentas` (`idauto`, `nombre`, `telefono`, `total`, `entregado`, `notas`, `productos`, `idaleatorio`) VALUES (NULL, '$nombre', '$telefono', '$total', '$entregado', '$notas', '$productos', '$idaleatorio')";

if (mysqli_query($conn, $sqlQueryNewSell)) {
	echo "New record created successfully";
} else {
	echo "Error: ". mysqli_error($conn);
}

mysqli_close($conn);

?>
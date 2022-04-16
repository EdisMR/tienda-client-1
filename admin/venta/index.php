<?php
require "../global/includes.php";
sessionVerifier();
?>

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Detalle de Venta</title>
  <?php htmlHead(); ?>
  <script src="./script/main.js" defer></script>
  <link rel="stylesheet" href="./sass/compiled/compiled.css">
</head>

<body>
  <?php htmlHeader(); ?>
  <main>
    <div class="main-title">
      <h1>
        Detalle de Venta
      </h1>
    </div>

    <div>
      <div>Fecha de compra: <span id="dateInner"></span></div>
      <a id="contactar" target="_blank" rel="noopener noreferrer">Contactar al cliente por Whatsapp</a>
    </div>

    <div class="formContainer">
      <form>
        <div class="block">
          <div class="inputContainer">
            <span>ID: </span><input required autocomplete="off" type="text" name="idaleatorio">
          </div>
        </div>
        <div class="block">
          <div class="inputContainer">
            <span>Nombre: </span><input required autocomplete="off" type="text" name="nombre">
          </div>
        </div>
        <div class="block">
          <div class="inputContainer">
            <span>Telefono: </span><input required autocomplete="off" type="tel" name="telefono">
          </div>
        </div>
        <div class="block">
          <div class="inputContainer">
            <span>Total: </span><input required autocomplete="off" type="text" name="total">
          </div>
        </div>
        <div class="block">
          <div class="inputContainer">
            <span>Entregado: </span><input required type="checkbox" checked name="entregado">
          </div>
        </div>
        <div class="block">
          <div class="inputContainer">
            <span>Notas: </span><textarea required name="notas"></textarea>
          </div>
        </div>
        <div class="block">
          <div class="inputContainer">
            <span>Productos: </span><input required autocomplete="off" name="productos" type="text">
          </div>
        </div>
      </form>

    </div>

    <div id="productDetails">

    <table>
        <thead>
          <tr>
            <td>Photo</td>
            <td>ID</td>
            <td>Cantidad</td>
            <td>Valor</td>
          </tr>
        </thead>
        <tbody id="tbodyProductsDetails">
        </tbody>
      </table>

    </div>

    <div class="buttonsContainer">
      <button id="sendData">Editar esta Venta</button>
    </div>

  </main>
  <?php htmlFooter(); ?>
</body>

</html>

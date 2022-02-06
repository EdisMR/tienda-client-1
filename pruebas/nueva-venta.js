function randomProductID() {
	let tempData = new Date()
	return (tempData.valueOf()).toString(36)
}

function nuevaVenta() {
	let algo = new FormData()
	algo.append("idaleatorio", randomProductID())
	algo.append("nombre", "nombre Dos")
	algo.append("telefono", "+50612345689")
	algo.append("total", "20000")
	algo.append("entregado", 0) /* el true tiene que ser numero */
	algo.append("notas", "Esta es una nota en la segunda entrada")
	algo.append("productos", "este es un string de los productos que se compraron")

	fetch("http://tienda.localhost/common-scripts/new-sale.php", {
			method: "POST",
			body: algo
		})
		.then(e => e.text())
		.then(e => {
			console.log(e)
			alertify.success("Venta realizada")
		})
		.catch(e=>{
			alertify.error("No se pudo realizar la venta")
		})
}
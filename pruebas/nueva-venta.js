function randomProductID() {
	let tempData = new Date()
	return (tempData.valueOf()).toString(36)
}

let algo=new FormData()
algo.append("idaleatorio",randomProductID())
algo.append("nombre","nombre uno")
algo.append("telefono","+50623454567")
algo.append("total","250000")
algo.append("entregado",1)/* el true tiene que ser numero */
algo.append("notas","Esta es una nota aleatoria")
algo.append("productos",JSON.parse('{"s1":"uno"}'))/* Enviar el json verificado */

fetch("http://tienda.localhost/common-scripts/new-sale.php",{
	method:"POST",
	body:algo
})
.then(e=>e.text())
.then(e=>{console.log(e)})
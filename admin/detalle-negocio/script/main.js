const buttonEnviar=document.getElementById("sendData")
const formulario=document.forms[0]

var infoNegocio=""

function getInfo(){
	fetch("/common-scripts/getBusinessInfo.php")
	.then(e=>e.json())
	.then(e=>{
		infoNegocio=e
		formulario.nombrenegocio.value=infoNegocio[0].nombrenegocio
		formulario.telefonowspp.value=infoNegocio[0].telefonowspp
	})
}
getInfo()


buttonEnviar.addEventListener("click",sendData,false)

function sendData(e){
	e.preventDefault()

	let datosFetch=new FormData(formulario)

	fetch("/admin/private-scripts/setBusinessInfo.php",{
		method:"POST",
		body:datosFetch
	})
	.then(e=>e.text())
	.then(e=>{
		console.log(e);
	})
}
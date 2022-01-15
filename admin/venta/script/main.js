const getScript="/admin/private-scripts/detalle-venta.php/?"
const editVentaScript="/admin/private-scripts/edit-venta.php"
let jsonResult

const formulario=document.forms[0]
const sendFormButton=document.querySelector("#sendData")

/* Traer los datos del producto */
function getSellDetails(){
	let queryString = window.location.search;
	let urlParams = new URLSearchParams(queryString);
	let ventaid = urlParams.get('ventaid');
	let urlQueryString=`${window.location.origin}${getScript}ventaid=${ventaid}`

	fetch(urlQueryString,{
		method:"GET"
	})
	.then(e=>e.text())
	.then(e=>JSON.parse(e))
	.then(e=>{
		jsonResult=e
		innerInputData()
		deshabilitarInputs()
	})
}


getSellDetails()

function innerInputData(){
	formulario.idaleatorio.value=jsonResult[0].idaleatorio
	formulario.nombre.value=jsonResult[0].nombre
	formulario.telefono.value=jsonResult[0].telefono
	formulario.total.value=jsonResult[0].total

	if(Boolean(Number(jsonResult[0].entregado))){
		formulario.entregado.checked=true
	}else{
		formulario.entregado.checked=false
	}

	formulario.notas.value=jsonResult[0].notas
	formulario.productos.value=jsonResult[0].productos
}

sendFormButton.addEventListener("click",sendMainForm,false)

function sendMainForm(){
	habilitarInputs()
	
	let infoDataForm=new FormData(formulario)

	infoDataForm.append("entregado",formulario.entregado.checked)
	
	fetch(editVentaScript,{
		body: infoDataForm,
		method:"POST"
	})
	.then(e=>e.text())
	.then(e=>{
		if(Boolean(Number(e))){
			alertify.success("Los datos ha sido modificado")
		}else{
			alertify.error("No se han modificado los datos")
		}
	})
	.catch(e=>{
		alertify.error("Ha ocurrido un error")
	})
	deshabilitarInputs()
}


/* funciones para habilitar o deshabilitar inputs al verificar si están todos los inputs correctos */
function habilitarInputs(){
	let elementos=[
		formulario.idaleatorio,
		formulario.productos
	]
	elementos.forEach(elm=>{
		elm.disabled=false
	})
}

function deshabilitarInputs(){
	let elementos=[
		formulario.idaleatorio,
		formulario.productos
	]
	elementos.forEach(elm=>{
		elm.disabled=true
	})
}
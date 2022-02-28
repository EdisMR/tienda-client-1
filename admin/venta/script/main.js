const getScript="/admin/private-scripts/detalle-venta.php/?"
const editVentaScript="/admin/private-scripts/edit-venta.php"
let jsonResult

const productDetailsTable=document.getElementById("tbodyProductsDetails")

const formulario=document.forms[0]
const sendFormButton=document.querySelector("#sendData")

const dateInner=document.getElementById("dateInner");

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
	.catch(e=>{
		alertify.error("Error al traer los datos")
	})
}


getSellDetails()

function innerInputData(){
	formulario.idaleatorio.value=jsonResult[0].idaleatorio
	formulario.nombre.value=jsonResult[0].nombre
	formulario.total.value=jsonResult[0].total

	if(Boolean(Number(jsonResult[0].entregado))){
		formulario.entregado.checked=true
	}else{
    formulario.entregado.checked=false
	}

  if(jsonResult[0].telefono){
    formulario.telefono.value=jsonResult[0].telefono
    document.getElementById("contactar").href=
    `https://api.whatsapp.com/send?phone=${jsonResult[0].telefono}`;
  }

	formulario.notas.value=jsonResult[0].notas
	formulario.productos.value=jsonResult[0].productos

  dateInner.innerHTML=`${moment(new Date(parseInt(jsonResult[0].idaleatorio,36))).format("dddd DD MMMM YYYY - HH:mm")}H`

  /* Table Product Details */
  let RelatedInfo=JSON.parse(jsonResult[0].productos).products

  productDetailsTableInner(RelatedInfo)
}

/* Fill the product details  */
function productDetailsTableInner(data){
  let productDetailsFragment=new DocumentFragment;
  let tr,id,cantidad,valor,imagen

  for(x=0;x<data.length;x++){
    tr=document.createElement("tr")
    id=document.createElement("td")
    cantidad=document.createElement("td")
    valor=document.createElement("td")
    imagen=document.createElement("td")
    id.innerHTML=`<a href="${location.origin}/admin/producto/?productid=${data[x].id}">${data[x].id}</a>`
    cantidad.innerHTML=data[x].cantidad
    valor.innerHTML=data[x].valor
    imagen.innerHTML="Null"

    tr.appendChild(imagen)
    tr.appendChild(id)
    tr.appendChild(cantidad)
    tr.appendChild(valor)

    productDetailsFragment.appendChild(tr)
  }

  productDetailsTable.appendChild(productDetailsFragment)
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

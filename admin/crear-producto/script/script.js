/* Forms */
const mainForm = document.getElementById("mainform");
const imageForm = document.getElementById("imageUploader")
const buttonSendData=document.getElementById("sendData")
const buttonResetData=document.getElementById("resetMainForm")

/* Images and Delete image button */
const itemsGridImages=document.querySelectorAll(".image-grid-item")
const imageButtonDeleteProduct=document.querySelectorAll(".deleteImage")

/* PHP scripts */
const uploadUrl = "/admin/private-scripts/subirarchivo.php"
const deleteUrl = "/admin/private-scripts/eliminararchivo.php"
const createProductScript="/admin/private-scripts/createproduct.php"

/* Images for the Input */
var imagesValue="";

function restartInitialStatus(){

}

function randomProductID() {
	let tempData = new Date()
	return (tempData.valueOf()).toString(36)
}

function randomImageName() {
	return crypto.randomUUID();
}

function addImageNameToInput(value){
	imagesValue+=value+","
	mainForm.imagenes.value=imagesValue
}

function removeImageNameInInput(value){
	imagesValue=imagesValue.replace(value+",","")
	mainForm.imagenes.value=imagesValue
}

imageForm.addEventListener("input",subirItem,false)

/* item es el item que llamo a la funcion */
function subirItem(evento,elm, item) {
	evento.preventDefault()

	let formDataInputs = new FormData(imageForm)
	formDataInputs.append("newname", randomImageName())

	let nombreCompletoImagenSubida
	fetch(uploadUrl, {
			method: "POST",
			body: formDataInputs
		})
		.then(e => {
			return e.text();
		})
		.then(e => {
			nombreCompletoImagenSubida = e
			setIMG(nombreCompletoImagenSubida)
			addImageNameToInput(nombreCompletoImagenSubida)
			alertify.success("Imagen subida")
		})
		.catch(e => {
			/* console.log(e); */
			alertify.error("No se cargó la imagen")
		})
}

function setIMG(stringRoute) {
	let ultimoElemento=""
	/* Definir quien es el elemento a llenar con la imagen para insertarle la imagen */
	for(let x=0;x<itemsGridImages.length;x++){
		if(itemsGridImages[x].children.length<2){
			ultimoElemento=itemsGridImages[x]
			break
		}
	}

	if(ultimoElemento!=""){
		let valorRoute = `${window.location.origin}/images/${stringRoute}`
		let imagen=document.createElement("img")
		imagen.src=valorRoute
		ultimoElemento.append(imagen)

		ultimoElemento.querySelector("button").style.visibility="visible"
		ultimoElemento.querySelector("button").dataset.url=stringRoute
	}
}





imageButtonDeleteProduct.forEach(elm=>{
	elm.addEventListener("click",eliminarProducto,false)
})

/* ELIMINAR UN PRODUCTO */
function eliminarProducto(e,imageName){
	let imagenURL
	e?imagenURL= e.target.dataset.url:imagenURL=imageName

	var form = new FormData()
	form.append("imagenEliminar", imagenURL)

	fetch(deleteUrl, {
			method: "POST",
			body: form
		})
		.then(ec => {
			return ec.text()
		})
		.then(ec=> {
			/* console.log(ec); */
			removeIMG(imagenURL)
			removeImageNameInInput(imagenURL)
			alertify.success("Imagen borrada")
		})
		.catch(ec => {
			/* console.log(ec); */
			alertify.warning("No se ha borrado la imagen")
		})
}

function removeIMG(imageDataURL){
	let imageNode=document.querySelector(`img[src *= "${imageDataURL}"]`)
	let parentElement=imageNode.parentNode
	parentElement.removeChild(imageNode)

	parentElement.querySelector("button").dataset.url=""
	parentElement.querySelector("button").style.visibility="hidden"
}

function deleteAllImages(){
	let buttonsRemoveImage=document.querySelectorAll(`.images-grid-container button`)
	buttonsRemoveImage.forEach(elm=>{
		if(elm.dataset.url!="" && elm.dataset.url!=undefined){
			eliminarProducto(false,elm.dataset.url)
		}
	})
}

function removeImages(){
	let images=document.querySelectorAll(`.images-grid-container button`)
	images.forEach(elm=>{
		if(elm.dataset.url!="" && elm.dataset.url!=undefined){
			removeIMG(elm.dataset.url)
		}
	})
}


buttonSendData.addEventListener("click",sendData,false)

function sendData(e){
	e.preventDefault()
	habilitarInputs()
	let posible=true
	let inputs=Array.from(document.querySelectorAll("#mainform input, #mainform textarea"))
	for(let x in inputs){
		if(inputs[x].validity.valid==false){
			posible=false
			break
		}
	}
	if(posible){
		sendMainForm()
	}else{
		deshabilitarInputs()
		alertify.warning("Debes llenar todos los campos")
	}
}

buttonResetData.addEventListener("click",()=>{
	mainForm.reset();imageForm.reset()
	deleteAllImages();
	alertify.message("Formulario reseteado")
	imagesValue=""
	mainForm.imagenes.value=imagesValue
	fillRandomIDInput()
})

function sendMainForm(){
	habilitarInputs()
	let mainFormData=new FormData(mainForm)

	fetch(createProductScript,{
		method:"POST",
		body:mainFormData
	})
	.then(r=>{
		return r.text()
	})
	.then(r=>{
		/* console.log(r,"enviado"); */
		window.scrollTo(0,0)
		mainForm.reset()
		imageForm.reset()
		removeImages()
		fillRandomIDInput()
		mainForm.prodid.disabled=true
		mainForm.imagenes.disabled=true
		alertify.success("Los datos se han enviado")
	})
	.catch(err=>{
		/* console.log(err); */
		deshabilitarInputs()
		alertify.error("No se han enviado los datos")
	})
}

function fillRandomIDInput(){
	/* Llenar ID con valor random */
	mainForm.prodid.value = randomProductID()
}
fillRandomIDInput()

function habilitarInputs(){
	let elementos=[
		mainForm.prodid,
		mainForm.imagenes
	]
	elementos.forEach(elm=>{
		elm.disabled=false
	})
}

function deshabilitarInputs(){
	let elementos=[
		mainForm.prodid,
		mainForm.imagenes
	]
	elementos.forEach(elm=>{
		elm.disabled=true
	})
}
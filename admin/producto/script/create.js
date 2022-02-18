const titlePage=document.querySelector(".main-title h1")
const titleContent="Agregar Nuevo Producto"
titlePage.innerHTML=titleContent
document.title=titleContent


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
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		mainForm.reset()
		imageForm.reset()
		removeImages()
		fillRandomIDInput()
		mainForm.prodid.disabled=true
		mainForm.imagenes.disabled=true
		alertify.success("Los datos se han enviado")
	})
	.catch(err=>{
		deshabilitarInputs()
		alertify.error("No se han enviado los datos")
	})
}


function randomProductID() {
	let tempData = new Date()
	return (tempData.valueOf()).toString(36)
}

function fillRandomIDInput(){
	/* Llenar ID con valor random */
	mainForm.prodid.value = randomProductID()
}

fillRandomIDInput()
animation1.play()

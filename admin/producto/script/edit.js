const titlePage=document.querySelector(".main-title h1")
const titleContent="Detalle de Producto"
titlePage.innerHTML=titleContent
document.title=titleContent

let resultFetchProductDetails

getProductDetails()

/* Traer los datos del producto */
function getProductDetails(){
  showLoader()
	let queryString = window.location.search;
	let urlParams = new URLSearchParams(queryString);
	let productid = urlParams.get('productid');
	let urlQueryString=`${window.location.origin}${infoOneProduct}productid=${productid}`

	fetch(urlQueryString,{
		method:"GET"
	})
	.then(e=>e.text())
	.then(e=>JSON.parse(e))
	.then(e=>{
		resultFetchProductDetails=e;
		fillValues()
		traerImagenes()
		animation1.play()
	})
	.catch(e=>{
		alertify.error("Error al traer los datos")
	})
  .finally(e=>{
    hideLoader()
  })
}

buttonResetData.addEventListener("click",()=>{
	mainForm.reset();imageForm.reset()
	alertify.message("Formulario reseteado")
	imagesValue=""
	mainForm.imagenes.value=imagesValue
	removeImages()
})


function sendMainForm(){
  showLoader()
	habilitarInputs()
	let mainFormData=new FormData(mainForm)

	fetch(editProductScript,{
		method:"POST",
		body:mainFormData
	})
	.then(r=>{
		return r.text()
	})
	.then(r=>{
		mainForm.prodid.disabled=true
		mainForm.imagenes.disabled=true
		alertify.success("Los datos se han enviado")
	})
	.catch(err=>{
		deshabilitarInputs()
		alertify.error("No se han enviado los datos")
	})
  .finally(e=>{
    hideLoader()
  })
}

function fillValues(){
	mainForm.prodid.value=resultFetchProductDetails[0].idaleatorio
	mainForm.titulo.value=resultFetchProductDetails[0].titulo
	mainForm.descripcion.value=resultFetchProductDetails[0].descripcion
	mainForm.valor.value=resultFetchProductDetails[0].valor
	mainForm.cantidad.value=resultFetchProductDetails[0].cantidad
	mainForm.categoria.value=resultFetchProductDetails[0].categoria


	mainForm.disponible.checked=Boolean(Number(resultFetchProductDetails[0].disponible))

	mainForm.imagenes.value=resultFetchProductDetails[0].imagenes
	imagesValue=resultFetchProductDetails[0].imagenes
}

function traerImagenes(){
	let ArrayDeLasImagenesBD=Array.from(imagesValue.split(","))
	let counter=0
	ArrayDeLasImagenesBD.forEach(elm=>{
		if(elm!=""){
			counter++
			setIMG(elm)
		}
	})
	if(counter>4){
		document.querySelector("#show-error-container").style.visibility="visible"
		fillErrors.innerText=`Más de 4 imágenes (${counter})`
	}
}

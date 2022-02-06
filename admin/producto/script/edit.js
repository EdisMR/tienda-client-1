const titlePage=document.querySelector(".main-title h1")
const titleContent="Detalle de Producto"
titlePage.innerHTML=titleContent
document.title=titleContent

let resultFetchProductDetails

getProductDetails()

/* Traer los datos del producto */
function getProductDetails(){
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
}

buttonResetData.addEventListener("click",()=>{
	mainForm.reset();imageForm.reset()
	alertify.message("Formulario reseteado")
	imagesValue=""
	mainForm.imagenes.value=imagesValue
	removeImages()
})


function sendMainForm(){
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
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		/* console.log(r); */
		mainForm.prodid.disabled=true
		mainForm.imagenes.disabled=true
		alertify.success("Los datos se han enviado")
	})
	.catch(err=>{
		deshabilitarInputs()
		alertify.error("No se han enviado los datos")
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

	ArrayDeLasImagenesBD.forEach(elm=>{
		if(elm!=""){
			setIMG(elm)
		}
	})
}
/* Forms */
const mainForm = document.getElementById("mainform");
const imageForm = document.getElementById("imageUploader")
const buttonSendData = document.getElementById("sendData")
const buttonResetData = document.getElementById("resetMainForm")

/* Images and Delete image button */
const itemsGridImages = document.querySelectorAll(".image-grid-item")
const imageButtonDeleteProduct = document.querySelectorAll(".deleteImage")

/* PHP scripts */
const uploadUrl = "/admin/private-scripts/upload-file.php"
const deleteUrl = "/admin/private-scripts/delete-file.php"
const createProductScript = "/admin/private-scripts/new-product.php"
const editProductScript = "/admin/private-scripts/edit-product.php"
const infoOneProduct = "/common-scripts/info-one-product.php/?"

/* Animacion cuando carga los datos del fetch */
const animation1 = gsap.timeline({
		paused: true,
	})
	.from(".flex-center", {
		opacity: 0,
		duration: 1
	})

/* Images for the Input */
var imagesValue = "";


function randomImageName() {
	return crypto.randomUUID();
}

function addImageNameToInput(value) {
	imagesValue += value + ","
	mainForm.imagenes.value = imagesValue
}

function removeImageNameInInput(value) {
	imagesValue = imagesValue.replace(value + ",", "")
	mainForm.imagenes.value = imagesValue
}

imageForm.addEventListener("input", (e) => {
	Array.from(imageForm.imagen.files).forEach(elm => {
		subirItem(elm)
	})
}, false)

/* item es el item que llamo a la funcion - esta funcion envia
 la imagen al servidor y devuelve el nombre con el que fue guardado */
function subirItem(elm, item) {
	let randomImgName = randomImageName()

	let formDataInputs = new FormData()
	formDataInputs.append("imagen", elm)
	formDataInputs.append("newname", randomImgName)

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
			if (nombreCompletoImagenSubida.includes(randomImgName)) {
				setIMG(nombreCompletoImagenSubida)
				addImageNameToInput(nombreCompletoImagenSubida)
				alertify.success("Imagen subida")
			} else {
				throw new Error
			}
		})
		.catch(e => {
			alertify.error("No se cargó la imagen")
		})
}

function setIMG(stringRoute) {
	let ultimoElemento = ""
	/* Definir quien es el elemento a llenar con la imagen, para insertarle la imagen */
	for (let x = 0; x < itemsGridImages.length; x++) {
		if (itemsGridImages[x].children.length < 2) {
			ultimoElemento = itemsGridImages[x]
			break
		}
	}

	if (ultimoElemento != "") {
		let valorRoute = `${window.location.origin}/images/${stringRoute}`
		let imagen = document.createElement("img")
		imagen.src = valorRoute
		ultimoElemento.append(imagen)

		ultimoElemento.querySelector("button").style.visibility = "visible"
		ultimoElemento.querySelector("button").dataset.url = stringRoute
	}
}


/* Añadir llistener para eliminar la imagen del servidor */
imageButtonDeleteProduct.forEach(elm => {
	elm.addEventListener("click", deleteImageFromServer, false)
})

/* ELIMINAR UNA IMAGEN DEL SERVIDOR */
function deleteImageFromServer(e, imageName) {
	let imagenURL
	e ? imagenURL = e.target.dataset.url : imagenURL = imageName

	var form = new FormData()
	form.append("imagenEliminar", imagenURL)

	fetch(deleteUrl, {
			method: "POST",
			body: form
		})
		.then(ec => {
			return ec.text()
		})
		.then(ec => {
			removeIMG(imagenURL)
			removeImageNameInInput(imagenURL)
			alertify.success("Imagen borrada")
		})
		.catch(ec => {
			alertify.warning("No se ha borrado la imagen")
		})
}

/* Eliminar una sola imagen y ocultar el boton para eliminarla*/
function removeIMG(imageDataURL) {
	let imageNode = document.querySelector(`img[src *= "${imageDataURL}"]`)
	let parentElement = imageNode.parentNode
	parentElement.removeChild(imageNode)

	parentElement.querySelector("button").dataset.url = ""
	parentElement.querySelector("button").style.visibility = "hidden"
}

/* Eliminar todas las imagenes del formulario 
(para cuando se resetea el formulario) */
function deleteAllImages() {
	let buttonsRemoveImage = document.querySelectorAll(`.images-grid-container button`)
	buttonsRemoveImage.forEach(elm => {
		if (elm.dataset.url != "" && elm.dataset.url != undefined) {
			deleteImageFromServer(false, elm.dataset.url)
		}
	})
}
/* Eliminar las imagenes del dom cuando se resetea el formulario */
function removeImages() {
	let images = document.querySelectorAll(`.images-grid-container button`)
	images.forEach(elm => {
		if (elm.dataset.url != "" && elm.dataset.url != undefined) {
			removeIMG(elm.dataset.url)
		}
	})
}

/* Listener para enviar el formulario */
buttonSendData.addEventListener("click", sendData, false)

function sendData(e) {
	e.preventDefault()
	habilitarInputs()
	let posible = true
	let inputs = Array.from(document.querySelectorAll("#mainform input, #mainform textarea"))
	for (let x in inputs) {
		if (inputs[x].validity.valid == false) {
			posible = false
			break
		}
	}
	if (posible) {
		sendMainForm()
	} else {
		deshabilitarInputs()
		alertify.warning("Debes llenar todos los campos")
	}
}


/* funciones para habilitar o deshabilitar inputs al verificar si están todos los inputs correctos */
function habilitarInputs() {
	let elementos = [
		mainForm.prodid,
		mainForm.imagenes
	]
	elementos.forEach(elm => {
		elm.disabled = false
	})
}

function deshabilitarInputs() {
	let elementos = [
		mainForm.prodid,
		mainForm.imagenes
	]
	elementos.forEach(elm => {
		elm.disabled = true
	})
}


function restartInitialStatus() {

}
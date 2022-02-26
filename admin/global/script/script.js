const header = {
	switchMenuButton: document.getElementById("switchMenu"),
	itemsShow: document.querySelectorAll(".header-item"),
	visible: false
}

const headerAnimation=gsap.timeline({paused:true,})
.from(".header-item",{
	duration:.2,
	stagger:.05,
	opacity:0,
	y:20,
	onStart:()=>{
		Array.from(document.querySelectorAll(".header-item"))
		.forEach(elm=>{
			elm.style.display="block"
		})
	},
	onReverseComplete:()=>{
		Array.from(document.querySelectorAll(".header-item"))
		.forEach(elm=>{
			elm.style.display="none"
		})
	}
})

header.switchMenuButton.addEventListener("click", switchMenu, false)

function showMenu() {
	/* header.itemsShow.forEach(elm => {
		elm.style.display = "block"
	}); */
	header.visible = true
	headerAnimation.play()
}

function closeMenu() {
	/* header.itemsShow.forEach(elm => {
		elm.style.display = "none"
	}); */
	header.visible = false
	headerAnimation.reverse()
}


function switchMenu() {
	if (header.visible) {
		closeMenu()
	} else {
		if (!header.visible) {
			showMenu()
		}
	}
}

document.querySelector("main").addEventListener("click", closeMenu, false)

toProductBtn = document.querySelector("#toProduct")
toSellBtn = document.querySelector("#toSell")

toProductBtn.addEventListener("click", () => {
	alertify.prompt("", "",
		function (evt, value) {
			if(value!=""){
				window.location.href=`${location.origin}/admin/producto/?productid=${value}`
			}
			if(value==""){
				alertify.warning("Ingresa un valor válido")
			}
		},
		function () {
		}).setHeader("Ingrese el ID del producto");
}, false)

toSellBtn.addEventListener("click", () => {
	alertify.prompt("", "",
		function (evt, value) {
			if(value!=""){
				window.location.href=`${location.origin}/admin/venta/?ventaid=${value}`
			}
			if(value==""){
				alertify.warning("Ingresa un valor válido")
			}
		},
		function () {
		}).setHeader("Ingrese el ID de la venta");
}, false)


/* Generador de ID aleatorio */
function randomProductID() {
	let tempData = new Date()
	return (tempData.valueOf()).toString(36)
}

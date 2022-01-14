const header = {
	switchMenuButton: document.getElementById("switchMenu"),
	itemsShow: document.querySelectorAll(".header-item"),
	visible: false
}

header.switchMenuButton.addEventListener("click", switchMenu, false)

function showMenu() {
	header.itemsShow.forEach(elm => {
		elm.style.display = "block"
		header.visible = true
	});
}

function closeMenu() {
	header.itemsShow.forEach(elm => {
		elm.style.display = "none"
		header.visible = false
	});
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
	alertify.prompt("Ingrese el ID del producto", "",
		function (evt, value) {
			window.location.href=`${location.origin}/admin/producto/?productid=${value}`
		},
		function () {
		});
}, false)

toSellBtn.addEventListener("click", () => {
	alertify.prompt("Ingrese el ID de la venta", "",
		function (evt, value) {
			window.location.href=`${location.origin}/admin/venta/?ventaid=${value}`
		},
		function () {
		});
}, false)
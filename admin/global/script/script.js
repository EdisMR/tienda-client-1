const header={
	switchMenuButton:document.getElementById("switchMenu"),
	itemsShow:document.querySelectorAll(".header-item"),
	visible:false
}

header.switchMenuButton.addEventListener("click",switchMenu,false)

function showMenu(){
	header.itemsShow.forEach(elm => {
		elm.style.display="block"
		header.visible=true
	});
}

function closeMenu(){
	header.itemsShow.forEach(elm => {
		elm.style.display="none"
		header.visible=false
	});
}


function switchMenu(){
	if(header.visible){
		closeMenu()
	}else{
		if(!header.visible){
			showMenu()
		}
	}
}
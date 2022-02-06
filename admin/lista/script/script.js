/* PHP queries */
const contenedorDeTabla="tbody"
var actualPage=1
sqlResults=0

/* Animacion cuando carga los datos del fetch */
let animation1=gsap.timeline({
	paused:true,
})
.from(contenedorDeTabla,{
	opacity:0,
	duration:1.5,
})


/* Table Info */
const tableBody=document.querySelector("tbody")
let fetchResult=JSON.parse("{}")

function getItems(){
	params=new URLSearchParams({
		"page":actualPage
	})

	fetch(scriptGet+params,{
		method:"GET"
	})
	.then(res=>res.text())
	.then(res=>JSON.parse(res))
	.then(res=>{
		fetchResult=res
		insertRows()
		document.querySelector("h1 span").innerText=actualPage
		animation1.play()
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	})
	.catch(e=>{
		alertify.warning("Error al traer los datos")
	})
}

actualPage=1
getItems()


function pageButtonsMore(){
	if(sqlResults>=24){
		actualPage++
		getItems()
	}else{
	}
}

function pageButtonsLast(){
	if(actualPage>1){
		actualPage--
		getItems()
	}
}

const btnLast=document.querySelector("#lastResultsBTN")
const btnMore=document.querySelector("#moreResultsBTN")

btnLast.addEventListener("click",pageButtonsLast,false)
btnMore.addEventListener("click",pageButtonsMore,false)
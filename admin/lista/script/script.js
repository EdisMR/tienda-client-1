/* PHP queries */
const contenedorDeTabla=document.querySelector(".tableContainer")
var actualPage=1

/* Animacion cuando carga los datos del fetch */
let animation1=gsap.timeline({
	paused:true,
})
.from(contenedorDeTabla,{
	opacity:0,
	duration:1
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
}

actualPage=1
getItems()
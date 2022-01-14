/* PHP queries */
const getItemsURL="/common-scripts/info-n-products.php/?"
const urlHrefBase="/admin/producto/?productid="
var actualPage=1

/* Table Info */
const tableBody=document.querySelector("tbody")
let fetchResult=JSON.parse("{}")

function getItems(){
	params=new URLSearchParams({
		"page":actualPage
	})

	fetch(getItemsURL+params,{
		method:"GET"
	})
	.then(res=>res.text())
	.then(res=>JSON.parse(res))
	.then(res=>{
		fetchResult=res
		insertRows()
		document.querySelector("h1 span").innerText=actualPage
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	})
}

function insertRows(){
	let fragment=new DocumentFragment()
	for(let x in fetchResult){
		let tRow=document.createElement("tr")
		let tLi
		let thref

		tLi=document.createElement("td")
		tLi.textContent=fetchResult[x].idauto
		tRow.appendChild(tLi)
		
		tLi=document.createElement("td")
		thref=document.createElement("a")
		thref.href=`${urlHrefBase}${fetchResult[x].idaleatorio}`
		thref.textContent=fetchResult[x].idaleatorio
		tLi.appendChild(thref)
		tRow.appendChild(tLi)
		
		tLi=document.createElement("td")
		tLi.textContent=fetchResult[x].titulo
		tRow.appendChild(tLi)
		
		tLi=document.createElement("td")
		tLi.textContent=fetchResult[x].descripcion
		tRow.appendChild(tLi)
		
		tLi=document.createElement("td")
		tLi.textContent=fetchResult[x].valor
		tRow.appendChild(tLi)
		
		tLi=document.createElement("td")
		tLi.textContent=fetchResult[x].categoria
		tRow.appendChild(tLi)
		
		tLi=document.createElement("td")
		if(Boolean(Number(fetchResult[x].disponible))){
			tLi.textContent="Si"
		}else{
			tLi.textContent="No"
		}
		tRow.appendChild(tLi)
		
		fragment.appendChild(tRow)
	}


	tableBody.appendChild(fragment)
}


actualPage=1
getItems()
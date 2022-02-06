const scriptGet="/common-scripts/info-n-products.php/?"
const urlBaseEnlaceDetalle="/admin/producto/?productid="


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
		thref.href=`${urlBaseEnlaceDetalle}${fetchResult[x].idaleatorio}`
		thref.textContent=fetchResult[x].idaleatorio
		tLi.appendChild(thref)
		tRow.appendChild(tLi)
		
		tLi=document.createElement("td")
		tLi.textContent=fetchResult[x].titulo
		tRow.appendChild(tLi)
		
		tLi=document.createElement("td")
		tLi.textContent=`₡${fetchResult[x].valor}`
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
	tableBody.innerHTML=""
	tableBody.appendChild(fragment)

	sqlResults=Array.from(document.querySelectorAll("tbody tr")).length

	animation1.restart()
}
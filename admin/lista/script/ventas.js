const scriptGet="/admin/private-scripts/all-sales.php/?"
const urlBaseEnlaceDetalle="/admin/venta/?ventaid="


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
		tLi.textContent=fetchResult[x].nombre
		tRow.appendChild(tLi)

		tLi=document.createElement("td")
		thref=document.createElement("a")
		thref.href=`https://api.whatsapp.com/send?phone=${fetchResult[x].telefono}`
		thref.target="_blank"
		thref.textContent=fetchResult[x].telefono
		tLi.appendChild(thref)
		tRow.appendChild(tLi)
		
		tLi=document.createElement("td")
		tLi.textContent=fetchResult[x].total
		tRow.appendChild(tLi)
		
		
		tLi=document.createElement("td")
		if(Boolean(Number(fetchResult[x].entregado))){
			tLi.textContent="Si"
		}else{
			tLi.textContent="No"
		}
		tRow.appendChild(tLi)
	
		tLi=document.createElement("td")
		tLi.textContent=fetchResult[x].notas
		tRow.appendChild(tLi)
		
		fragment.appendChild(tRow)
	}

	tableBody.innerHTML=""
	tableBody.appendChild(fragment)
	sqlResults=Array.from(document.querySelectorAll("tbody tr")).length

	animation1.restart()
}
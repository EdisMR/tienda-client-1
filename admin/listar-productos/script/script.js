/* PHP queries */
const getItemsURL="/common-scripts/ver-n-prod.php"

/* Table Info */
const tableBody=document.querySelector("tbody")
let fetchResult=JSON.parse("{}")

function getItems(howMany){
	fetch(getItemsURL,{
		method:"POST"
	})
	.then(res=>res.text())
	.then(res=>JSON.parse(res))
	.then(res=>{
		fetchResult=res
	})
}

function insertRows(){
	let fragment=document.createDocumentFragment()

	for(let x in fetchResult){
		let elmTD=document.createElement("td")
		let elmTD=
	}
}
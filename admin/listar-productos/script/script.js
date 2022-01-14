/* PHP queries */
const getItemsURL="/common-scripts/info-n-products.php/?"

/* Table Info */
const tableBody=document.querySelector("tbody")
let fetchResult=JSON.parse("{}")

function getItems(page){
	params=new URLSearchParams({
		"page":page
	})

	fetch(getItemsURL+params,{
		method:"GET"
	})
	.then(res=>res.text())
	.then(res=>JSON.parse(res))
	.then(res=>{
		fetchResult=res
		console.log(res);
	})
}

function insertRows(){
	let fragment=document.createDocumentFragment()
}
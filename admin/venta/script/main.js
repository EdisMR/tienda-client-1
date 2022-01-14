const getScript="/admin/private-scripts/detalle-venta.php/?"
let jsonResult

/* Traer los datos del producto */
function getSellDetails(){
	let queryString = window.location.search;
	let urlParams = new URLSearchParams(queryString);
	let ventaid = urlParams.get('ventaid');
	let urlQueryString=`${window.location.origin}${getScript}ventaid=${ventaid}`

	fetch(urlQueryString,{
		method:"GET"
	})
	.then(e=>e.text())
	.then(e=>JSON.parse(e))
	.then(e=>{
		jsonResult=e
		console.log("jsonResult", jsonResult);
	})
}

getSellDetails()
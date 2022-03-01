const closeSession=document.getElementById("closeSession")
const urlSession="/admin/private-scripts/session.php"

closeSession.addEventListener("click",()=>{
  let data=new FormData()
  data.append("type","finish")
  fetch(urlSession,{
    body:data,
    method:"POST"
  })
  .then(e=>{
    location.reload()
  })
})

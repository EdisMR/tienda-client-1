const passwordSwitch=document.getElementById("passwordSwitch")
const passwordInput=document.getElementById("passwordInput")
const sendInfo=document.getElementById("sendInfo")
const formulario=document.forms[0]
const urlValidate="/admin/private-scripts/session.php"

passwordSwitch.addEventListener("click",()=>{
  passwordInput.type=="password"?passwordInput.type="text":passwordInput.type="password"
})

formulario.addEventListener("submit",validateForm,false)

function validateForm(value){
  value.preventDefault()
  let data=new FormData(formulario);
  data.append("type","validate")
  fetch(urlValidate,{
    body:data,
    method:"POST",
  })
  .then(e=>e.text())
  .then(e=>{
    if(e=="1"){
      location.href="/admin/"
    }else{
      alertify.error("Contraseña incorrecta")
    }
  })
  .catch(e=>{

  })
}

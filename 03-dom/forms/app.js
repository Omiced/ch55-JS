const formEl = document.querySelector("form");
const divMessage = document.querySelector("#message");


formEl.addEventListener("submit", (event)=>{
  //previene el comportamiento por defecto donde se actualiza la página
  event.preventDefault();
  // console.log(event)
  // const firstName = event.target.elements["firstName"].value;
  // const lastName =  event.target.elements["lastName"].value;
  // console.log(firstName);
  // console.log(lastName);

  //formData 
  const dataArray = [...new FormData(formEl)];
  const dataObject = Object.fromEntries(dataArray);
  if(validateUserEmail(dataObject.email) && valideteUserPassword(dataObject.password)){
    divMessage.innerHTML = "";
    succesMessage(dataObject);
    return;
  }else{
    divMessage.innerHTML = "";
    errorMessage();
    return;
  }
})


function validateUserEmail(email){
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValidEmail = regexEmail.test(email);
  return isValidEmail;
}

function valideteUserPassword(password){
  const regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
  return regexPassword.test(password);
}

function errorMessage(){
  divMessage.innerHTML = "";
  const errorAlert = `
  <div class="alert alert-danger" role="alert">
    Algo salio mal, revisa tus datos
  </div>
`;
  divMessage.insertAdjacentHTML("beforeend", errorAlert);
}

function succesMessage(infoUser){
  const successAlert = `
  <div class="alert alert-success" role="alert">
    Hola fuiste registrado, ${infoUser.firstName} ${infoUser.lastName},
    con el email ${infoUser.email} y tu phone es ${infoUser.phoneNumber}
  </div>
`
divMessage.insertAdjacentHTML("beforeend",successAlert);
}
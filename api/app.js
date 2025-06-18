const loginForm = document.querySelector("form");
const alertError = document.querySelector("#alert_error");
//successalert
const successAlert = document.querySelector("#alert_success");
const dataUser = {
  email: "josuecanov@gmail.com",
  password: "josue1234."
}


loginForm.addEventListener("submit",(e) => {
  e.preventDefault();
  successAlert.classList.add("hidden");
  alertError.classList.add("hidden");
  const loginData = Object.fromEntries([...new FormData(loginForm)]);
  //obtener y transformar la data local en objeto js
  const localData = JSON.parse(localStorage.getItem(loginData.email));
  loginForm.reset();
  //comprobando que la data local exista
  if(localData === null){
    alertError.classList.remove("hidden")
    return;
  }
  if(loginData.password === localData.password){
    successAlert.classList.remove("hidden");
    //redireccion
    window.location.href = "./pages/products.html"
  }else{
    alertError.classList.remove("hidden");
  }

})
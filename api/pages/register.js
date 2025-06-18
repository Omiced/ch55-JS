const formEl = document.querySelector("form");

/*fijando valor al localstorage
localStorage.setItem("ch55", "Francisco, Maara, Sarai,Alan");
localStorage.setItem("ch55", "Francisco, Maara, Sarai,Alan");
//obteniendo valor del localstorage
console.log(localStorage.getItem("ch55"));
//eliminando llave y valor del localstorage
localStorage.removeItem("ch55");
//eliminar todo del local
localStorage.clear(); */
formEl.addEventListener("submit", (event)=>{
  //previene el comportamiento por defecto donde se actualiza la página
  event.preventDefault();
  //formData 
  const dataArray = [...new FormData(formEl)];
  const dataObject = Object.fromEntries(dataArray);
  //convirtiendo data a texto para poder ser guardada
  const dataText = JSON.stringify(dataObject);
  //mandando la info al local storage
  localStorage.setItem(dataObject.email,dataText);
  formEl.reset();
  // setTimeout recibe una funcion de callback donde va lo que se va a ejecutar
  //y como segundo argumento recibe el tiempo en milisegundos
  setTimeout(() => {
    window.location.href = "../index.html";
  },3000);
})
console.log("primer console log")
/*
  para crear una promesa, necesitamos una funcion 
  que retorne una promesa nueva, con dos estados
  resolve y reject.
*/
function waitNSeconds(miliseconds){
  console.log("Esperando la respuesta");
  return new Promise((resolve,reject) => {
    //inicializamos el timeout
    setTimeout(() => {
      //estado artificial para ver la salida resolve o reject
      const response = false;
      if(response){
        resolve("La peticion fue exitosa");
      }else{
        reject("La peticion fallo");
      }
    },miliseconds)
  })
}

waitNSeconds(6000).then((response) => {
  console.log("Respuesta exitosa", response);
}).catch((error) => {
  console.log("Respuesta rechazada", error);
}).then(() =>"hola" ).catch(() => "hola").then();

console.log("Voy despues del llamado a la funcion waitNSeconds");
console.log("Voy despues del llamado a la funcion waitNSeconds 2");
console.log("Voy despues del llamado a la funcion waitNSeconds 3");
console.log("Voy despues del llamado a la funcion waitNSeconds 4");
console.log("Voy despues del llamado a la funcion waitNSeconds 5");

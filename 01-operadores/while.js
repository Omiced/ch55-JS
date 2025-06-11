let counter = 0;

// while (counter < 100) {
//   counter++;
//   console.log(counter);
// }
/* 
  break esta para el bucle por completo
  continue esta todo lo que este debajo de la palabra continue es ignorado y vuelve al comienzo del bucle
*/
while (true) {
  console.log(counter);
  if (counter < 100) {
    counter++;
    continue;
  } else {
    console.log("Ya va a terminar el bucle");
    break;
  }
  console.log("hola estoy despues del continue");
}

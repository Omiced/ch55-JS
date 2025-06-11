let counter = 0;

// do {
//   counter++;
//   console.log(counter);
// } while (counter < 100);

do {
  console.log(counter);
  if (counter < 100) {
    counter++;
    continue;
  } else {
    console.log("Ya va a terminar el bucle");
    break;
  }
  console.log("hola estoy despues del continue");
} while (true);

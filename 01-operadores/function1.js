const sumaResult = suma(2, 2);
let counter = 0;
console.log(sumaResult);
//firma de la funcion function suma(){}
//function declaration
function suma(a, b) {
  a + b;
} //funcion que no retorna nada
console.log(counter);
function resta(a, b) {
  counter++;

  return a - b;
} //retorna un valor
let restaResult = resta(6, 3);
console.log({ restaResult });
console.log(resta(4, 2));

//function expression or anonimous
const multiplicacion = function (a, b) {
  return a * b;
};

const dividir = function (a, b) {
  console.log(a / b);
};
const multiResult = multiplicacion(3, 6);
console.log(multiResult);
dividir(4, 2);

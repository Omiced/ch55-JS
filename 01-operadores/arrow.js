//Arrow function
//estas funciones tienen un early return, si solo es una linea de codigo, en caso de ser mas es necesario abrir llaves y poner explicitamente el return
const sumar = (a, b) => a + b;
const saludar = () => {
  const name = prompt("Ingresa tu nomnbre");
  const age = Number(prompt("Ingresa tu edad"));
  alert("En 10 años vas a tener " + (age + 10) + " años");
  alert("Hola " + name + " Bienvenido a Generation");
};
console.log(sumar(4, 6));
saludar();
// console.log(saludar());
// console.log(saludar());
// console.log(saludar());

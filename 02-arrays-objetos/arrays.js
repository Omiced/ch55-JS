//Arrays
const names = ["Josue", "Mar", "Maara", "Marcos", "Karim", "Carlos"];
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(names[2]);
console.log(names[4]);
console.log(names.length);
//obtener el ultimo elemento de un array
console.log(names[names.length - 1]);
//como recorrer arrays,
console.log("Recorrido con for");
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
//foreach
//console.log("Recorrido con foreach");
// names.forEach(function (elemento) {
//   console.log(elemento);
// });
console.log("Recorrido con foreach usando arrow function");

names.forEach((elemento) => console.log(elemento));
names.forEach((name) => {
  const upperCaseName = name.toLocaleUpperCase();
  console.log(upperCaseName);
});
//agregar y eliminar elementos.
//pop elimina y regresa el ultimo elemento del array
//push agrega un elemento al final del array, hacen que el array se comporte como un stack o pila
const lastElement = names.pop();
console.log(lastElement);
console.log(names);
names.push("Ricardo");
console.log(names);
//unshift y shift
//estos metodos permiten que nuestro array actue como una cola.
const firstElement = names.shift();
console.log(firstElement);
console.log(names);
names.unshift("Sarai");
console.log(names);

//map, filter, reduce.
//tienen la particularidad retornaan un array nuevo
const upperCaseNames = names.map((name) => name.toLocaleUpperCase());
console.log(names);
console.log(upperCaseNames);
const numbersTimesFour = numbers.map((number, indice, array) => {
  console.log(indice);
  console.log(array);
  return number * 4;
});
console.log(numbers);
console.log(numbersTimesFour);

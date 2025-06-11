//filter, reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 20, 30, 21, 15, 100];
const names = ["Josue", "Mar", "Maara", "Marcos", "Karim", "Carlos"];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const namesWithoutMar = names.filter((name) => {
  const lowerName = name.toLocaleLowerCase();
  return lowerName !== "mar";
});
console.log(evenNumbers);
console.log(namesWithoutMar);
//reduce
const total = numbers.reduce((acumulador, actual) => acumulador + actual, 0);

console.log({ total });
//buscar el indice de un elemento
console.log(numbers.indexOf(7));
console.log(numbers.indexOf(20));
//sort ordenar un array
numbers2.sort((a, b) => b - a);
numbers2.sort((a, b) => a - b);


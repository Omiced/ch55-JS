/* Expone las variable a nivel global, y ya no se recomienda su uso */
var name = "Josue";
/* let permite crear variables que pueden ser reasignadas */
let age = 31;
console.log(age);
age = 32;
console.log(age)

/* const permite crear constantes, donde el valor no puede ser reasignado */
const lastName = "Cano";
console.log(lastName);
/* Los array son pasados por referencia*/
const arr = ["Josue", "Mar", "Maar"];
console.log(arr);
arr[0] = "Cano";
console.log(arr);

console.log(1 + "1");
console.log("4" + 4);
console.log("10"/2);
console.log("38" - 1);
console.log(+"246");

console.log(10/0);
console.log(Boolean([]));
console.log(Boolean([]));
console.log(Boolean(""));
console.log(Boolean(0));
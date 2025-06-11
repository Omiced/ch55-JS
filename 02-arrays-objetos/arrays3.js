const names = ["Josue", "Mar", "Maara", "Marcos", "Karim", "Carlos"];
const namesCopy = names;
console.log(names);
console.log(namesCopy);

namesCopy[4] = "Amauri";
console.log(names);
console.log(namesCopy);
//spreed operator
const namesClone = [...names];
console.log(names);
console.log(namesClone);
namesClone[4] = "Ernesto";
console.log(names);
console.log(namesClone);
//rest operator
const [marcos, , thirdElement, , ...demas] = names;
console.log({ marcos });
console.log({ thirdElement });
console.log({ demas });

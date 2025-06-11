const user = {
  name: "Josue",
  age: 31,
  favoriteBand: "Twenty one pilots",
  isAlive: true,
  favoriteFruits: ["Naranja", "Toronja", "Fresa", "Manzana"],
  address: {
    zipCode: 5000,
    street: "Avenida siempre viva",
    colony: "springfield",
  },
};

console.log(user.address);
console.log(user.address.street);
console.log(user["age"]);
console.log(user["favoriteFruits"][2]);
console.log(user.favoriteFruits[1]);
console.log(user["address"].street);
//saber si existe una llave en el objeto
console.log(user.hasOwnProperty("age"));
console.log(user.hasOwnProperty("favoriteColor"));
//toma todas las llaves y las mete en un array, se ocupa directo desde la clase objeto
console.log(Object.keys(user));
//toma todos los valores y los mete en un array, se ocupa directo desde la clase objeto
console.log(Object.values(user));

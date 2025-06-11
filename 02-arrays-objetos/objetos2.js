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

const user2 = { ...user };
console.log(user2);
console.log(user);

user2.name = "Cano";
console.log(user2);
console.log(user);

const user3 = structuredClone(user);
console.log(user3);
user3.name = "Villalobos";
console.log(user);
console.log(user3);

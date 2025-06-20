import { Mamifero } from "./Mamifero.js";

//subclase
class Gato extends Mamifero{
  owner;
  raza;
  bigotes;
  color;
  constructor(_patas, producenLeche, cuernos,especie,pelo,numDientes,cola,
     name,owner, raza, bigotes, color ){
    super(_patas,producenLeche,cuernos,especie,pelo,
      numDientes,cola,name);
    this.owner = owner;
    this.raza = raza;
    this.bigotes = bigotes;
    this.color = color;
  }

  set setOwner(owner){
    this.owner = owner;
  }

  get getOwner(){
    return this.owner;
  }

  set setRaza(raza){
    this.raza = raza;
  }

  get getRaza(){
    return this.raza;
  }

  set setBigotes(bigotes){
    this.bigotes = bigotes;
  }

  get getBigotes(){
    return this.bigotes;
  }

  set setColor(color){
    this.color = color;
  }

  get getColor(){
    return this.color;
  }
  //@override
  hacerSonido(){
    return `Hola soy ${this.getName} mi owner es ${this.getOwner} soy de raza ${this.getRaza} 
      ${this.getNumDientes === 30? "Aun tengo todos mis dientes" : "Me faltan algunos dientes"} y hago ${this.maullar()}
    `;
  }

  maullar(){
    return "miau";
  }

}//fin clase

const mango = new Gato(4,false,0, "felino",true, 30, true, "Mango", "Alan", "común europeo", true, "pardo");
const july = new Gato(4, false, 0, "felino", true,30, true, "July", "Mar", "ni idea", true, "gris y blanco");
const panchita = new Gato(4, false, 0, "felino", true,30, true, "Panchita", "Jaqueline", "mestiza", true, "gris atigrado");

console.log(mango.hacerSonido());
console.log(july.hacerSonido());
console.log(panchita.hacerSonido());
mango.setNumDientes = 20;
console.log(mango.hacerSonido());

console.log(mango.getName)
console.log(mango.getOwner)
console.log(mango.maullar())

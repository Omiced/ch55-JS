//inicio de una clase, superclase
export class Mamifero{
  //atributos, propiedes o varibles de instancia
  _patas; 
  producenLeche;
  cuernos;
  especie;
  pelo ;
  numDientes;
  cola;
  name; 

  //metodo constructor, es llamado cuando creamos un objeto nuevo
  constructor(_patas,producenLeche, cuernos, especie, pelo, numDientes, cola, name ){
      this._patas = _patas ;
      this.producenLeche = producenLeche;
      this.cuernos = cuernos;
      this.especie = especie;
      this.pelo = pelo;
      this.numDientes = numDientes;
      this.cola = cola;
      this.name = name;
  }

  set name(newName){
    this.name = newName;
  }

  get getName(){
    return this.name;
  }

  set setPatas(newNumPatas){
    this._patas = newNumPatas;
  }

  get getNumPatas(){
    return this._patas;
  }

  set setProducenLeche(newBoolean){
    this.producenLeche = newBoolean;
  }

  get getProducenLeche(){
    return this.getProducenLeche;
  }

  set setCuernos(newCuernos){
    this.cuernos = newCuernos;
  }

  get getCuernos(){
    return this.cuernos;
  }

  set setEspecie(newEspecie){
    this.especie = newEspecie;
  }

  get getEspecie(){
    return this.especie;
  }

  set setPelo(newPelo){
    this.pelo = newPelo;
  }

  get getPelo(){
    return this.pelo;
  }

  set setNumDientes(newNumDientes){
    this.numDientes = newNumDientes;
  }

  get getNumDientes(){
    return this.numDientes;
  }

  set setCola(newCola){
    this.cola = newCola;
  }

  get getCola(){
    return this.cola;
  }

  /* 
    los metodos de instancia, se ejecutan desde el objeto que se crea con base en la clase.
  */

  hacerSonido(){
    return "Sonido generico de animal";
  }

  /**
   * Los metodos estaticos se ejecutan desde la clase, no es necesario crear un objeto.
   */

  static tieneDientes(animal){
   if(animal.getNumDientes > 0) return true;
   return false;   
  }
}//fin class 

/*objeto creado a partir de la clase Mamifero
const leon = new Mamifero(4, true, 0, "felino", true, 30, true,"simba" );
const leon2 = new Mamifero(4, true, 0, "felino", true, 30, true,"nala" );
console.log(leon);
//solo los getters no necesitan parentesis
console.log(leon.getCola);
console.log(leon.hacerSonido());
console.log(leon.getNumDientes);
leon.setNumDientes = 0;
console.log(leon.getNumDientes);
console.log(Mamifero.tieneDientes(leon));
console.log(Mamifero.tieneDientes(leon2));

console.log(leon.getName)*/
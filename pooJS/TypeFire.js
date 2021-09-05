import Pokemon from "./Pokemon.js";
//herencia
class TypeFire extends Pokemon {
  constructor(name, evolutions) {
    super(name, "fire", evolutions);
  }

  message() {
    return `Hola soy ${this.name} y soy de tipo fuego`;
  }
  //polimorfismo modificar el comportamiento de clase padre.
  attack() {
    return `${this.name}, ataca con Aliento Igneo`;
  }
}

export default TypeFire;

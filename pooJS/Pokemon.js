class Pokemon {
  #name = "";
  #type = "";
  #evolutions = [];

  constructor(name, type, evolutions) {
    this.#name = name;
    this.#type = type;
    this.#evolutions = evolutions;
  }

  set name(value) {
    this.#name = value;
  }

  set type(value) {
    this.#type = value;
  }

  set evolutions(value) {
    this.#evolutions = value;
  }

  get name() {
    return this.#name;
  }

  get type() {
    return this.#type;
  }

  get evolutions() {
    return this.#evolutions;
  }

  attack() {
    return `soy el pokemon ${this.#name} y estoy atacando!`;
  }

  evolve(evolution = 0) {
    let message = "";
    const ITSEVOLUTION = this.#evolutions[evolution] || "";

    if (ITSEVOLUTION) {
      message = `tu ${this.#name} ha evolucionando a ${ITSEVOLUTION}`;
      this.#name = ITSEVOLUTION;
    } else {
      message = `tu ${this.#name} no tiene evolución.`;
    }

    return message;
  }
}

export default Pokemon;

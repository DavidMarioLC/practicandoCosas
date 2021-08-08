class Persona {
  name = "David";
  nickname="ninguno";

  constructor(){

  }

  saludar(){
    console.log(`Hola ${this.name}`);
  }

  init(){
    this.saludar()    
  }
}

const persona = new Persona();
persona.init();
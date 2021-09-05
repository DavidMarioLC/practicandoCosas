import Pokemon from "./Pokemon.js";
import Pokedex from "./Pokedex.js";
import TypeFire from "./TypeFire.js";

//encapsulacion ()
const Pichu = new Pokemon("Pichu", "electric", ["Pichu", "Pikachu", "Raichu"]);
console.log(`Soy ${Pichu.name} y soy de tipo ${Pichu.type}`);
console.log(Pichu.attack());

//abstraccion ()
const POKEDEX = new Pokedex();
POKEDEX.getInfo("pikachu");

//herencia ()
const CHARMANDER = new TypeFire("charmander", ["charizar"]);
console.log(CHARMANDER.message());

//polimorfismo ()
console.log(CHARMANDER.attack());

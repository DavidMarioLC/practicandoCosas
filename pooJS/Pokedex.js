class Pokedex {
  getInfo(name) {
    fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${name}`)
      .then((response) => response.json())
      .then(([data]) => console.log(data));
  }
}
export default Pokedex;

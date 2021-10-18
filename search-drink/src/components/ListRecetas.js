import { useContext } from "react";
import { RecetaContext } from "../context/RecetasContext";
import Receta from "./Receta";
const ListRecetas = () => {
  const { recetas } = useContext(RecetaContext);
  console.log(recetas);
  const listRecetas = recetas.map((receta, index) => (
    <Receta key={receta.idDrink} receta={receta} />
  ));

  return <div className="row mt-5">{listRecetas}</div>;
};

export default ListRecetas;

import { createContext, useState, useEffect } from "react";

export const RecetaContext = createContext();

const RecetaProvider = ({ children }) => {
  const [recetas, setRecetas] = useState([]);
  const [busqueda, searchRecetas] = useState({
    nombre: "",
    categoria: "",
  });

  const { nombre, categoria } = busqueda;
  const [consultar, setConsultar] = useState(false);

  useEffect(() => {
    if (consultar) {
      const getRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria.replace(
          " ",
          "_"
        )}`;
        const response = await fetch(url);
        const data = await response.json();

        setRecetas(data.drinks);
      };

      getRecetas();
    }
  }, [busqueda]);

  return (
    <RecetaContext.Provider value={{ searchRecetas, setConsultar }}>
      {children}
    </RecetaContext.Provider>
  );
};

export default RecetaProvider;

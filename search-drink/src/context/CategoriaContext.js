import { createContext, useState, useEffect } from "react";

//create context object
export const CategoriaContext = createContext();

const CategoriaProvider = ({ children }) => {
  const [categoriaState, setCategoriaState] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
      const response = await fetch(URL);
      const { drinks } = await response.json();
      setCategoriaState(drinks);
    };

    fetchCategorias();
  }, []);

  return (
    <CategoriaContext.Provider value={categoriaState}>
      {children}
    </CategoriaContext.Provider>
  );
};

export default CategoriaProvider;

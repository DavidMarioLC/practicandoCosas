import { createContext, useState, useEffect } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [idReceta, setIdReceta] = useState(null);
  const [receta, setReceta] = useState({});

  useEffect(() => {
    const getReceta = async () => {
      if (!idReceta) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
      const response = await fetch(url);
      const data = await response.json();
      setReceta(data.drinks[0]);
    };
    getReceta();
  }, [idReceta]);

  return (
    <ModalContext.Provider value={{ idReceta, setIdReceta, receta, setReceta }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

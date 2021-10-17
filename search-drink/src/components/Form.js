import { useContext, useEffect, useState } from "react";
import { CategoriaContext } from "../context/CategoriaContext";
import { RecetaContext } from "../context/RecetasContext";

const Form = () => {
  const stateCatorias = useContext(CategoriaContext);
  const { searchRecetas, setConsultar } = useContext(RecetaContext);

  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const getDatosRecetas = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const listItems = stateCatorias.map(({ strCategory }, index) => (
    <option key={index}>{strCategory}</option>
  ));

  const handlerSubmit = (e) => {
    e.preventDefault();
    searchRecetas(busqueda);
    setConsultar(true);
  };

  return (
    <form className="col-12" onSubmit={handlerSubmit}>
      <fieldset className="text-center">
        <legend>Busca bebidas por Categoria o ingrediente</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            onChange={getDatosRecetas}
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Busca por ingrediente"
          />
        </div>
        <div className="col-md-4">
          <select
            onChange={getDatosRecetas}
            className="form-control"
            name="categoria"
          >
            <option value="">--Selecciona Categoria--</option>
            {listItems}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            value="Buscar"
            className="btn btn-block btn-primary"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;

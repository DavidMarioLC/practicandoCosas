import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Receta = ({ receta }) => {
  const [modalStyle, setModalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIdReceta(null);
    setReceta({});
  };

  const {
    idReceta,
    setIdReceta,
    receta: recetaModal,
    setReceta,
  } = useContext(ModalContext);

  console.log(recetaModal);
  const { strDrink, strDrinkThumb, idDrink } = receta;

  const handlerClick = (idDrink) => {
    setIdReceta(idDrink);
    handleOpen();
  };

  const mostrarIngredientes = (receta) => {
    console.log(receta);
    let ingredientes = [];

    for (let i = 0; i < 16; i++) {
      if (receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li>
            {receta[`strIngredient${i}`]}
            {receta[`strIngredient${i}`]}
          </li>
        );
      }
    }

    return ingredientes;
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{strDrink}</h2>
        <img className="card-img-top" src={strDrinkThumb} alt={strDrink} />
        <div className="card-body">
          <button
            onClick={() => handlerClick(idDrink)}
            type="button"
            className="btn btn-block btn-primary"
          >
            Ver receta
          </button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2 id="simple-modal-title">{recetaModal.strDrink}</h2>
              <p id="simple-modal-description">{recetaModal.strInstructions}</p>
              <img
                className="img-fluid my-4"
                src={recetaModal.strDrinkThumb}
                alt=""
              />
              <h3>Ingredientes y cantidades</h3>
              <ul>{mostrarIngredientes(recetaModal)}</ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;

import "animate.css";
import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [activeModal, setActiveModal] = useState(false);

  const showModal = () => {
    setActiveModal(!activeModal);
  };

  const openModal = activeModal ? "open-modal " : "";

  return (
    <>
      <button onClick={showModal} className="btn-open-modal">
        Open modal
      </button>

      {activeModal ? (
        <div className={`modal-overlay ${openModal}`}>
          <div
            className={`modal animate__animated  ${
              activeModal ? "animate__fadeInUp" : "animate__fadeOutDown"
            }`}
          >
            <header className="modal__header">
              <h2 className="modal__title">Modal Title</h2>
              <button onClick={showModal} className="btn-close-modal">
                x
              </button>
            </header>
            <section className="modal__body"></section>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;

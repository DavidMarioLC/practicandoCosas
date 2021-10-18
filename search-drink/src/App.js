import Header from "./components/Header";
import Form from "./components/Form";
import CategoriaProvider from "./context/CategoriaContext";
import RecetasProvider from "./context/RecetasContext";
import ListRecetas from "./components/ListRecetas";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    <CategoriaProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <ListRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriaProvider>
  );
}

export default App;

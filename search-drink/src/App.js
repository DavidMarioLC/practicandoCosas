import Header from "./components/Header";
import Form from "./components/Form";
import CategoriaProvider from "./context/CategoriaContext";
import RecetasProvider from "./context/RecetasContext";
function App() {
  return (
    <CategoriaProvider>
      <RecetasProvider>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Form />
          </div>
        </div>
      </RecetasProvider>
    </CategoriaProvider>
  );
}

export default App;

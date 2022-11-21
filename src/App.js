import "./App.css";
import { Formulario } from "./Componentes/formulario";
import { Rentabilidade } from "./Componentes/rentabilidade";
import { useState } from "react";
import Loader from "./Componentes/loader";
function App() {
  const [responseApi, setResponseApi] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      {loading && <Loader />}
      <main>
        <Formulario setResponseApi={setResponseApi} setLoading={setLoading} />
        <Rentabilidade Res={responseApi} />
      </main>
    </div>
  );
}

export default App;

import "./App.css";
import { Formulario } from "./Components/formulario";
import { Rentabilidade } from "./Components/rentabilidade";
import { useState } from "react";
import Loader from "./Components/loader";
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

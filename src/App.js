import "./App.css";
import { Form } from "./Components/formulario";
import { Rent } from "./Components/rentabilidade";
import { useState } from "react";
import Loader from "./Components/loader";
function App() {
  const [Res, SetRes] = useState(null);
  const [Loading, SetLoading] = useState(false);
  return (
    <div className="App">
      {Loading && <Loader />}
      <main>
        <Form SetRes={SetRes} SetLoading={SetLoading} />
        <Rent Res={Res} />
      </main>
    </div>
  );
}

export default App;

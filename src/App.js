import "./App.css";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";

import { Entradas, AgregarEntrada } from "./components/EntradaProducto";

function App() {
  return (
    <>
      <NavBar />

      <div className="container " style={{ marginTop: "5vh" }}>
        <Switch>
          <Route exact path="/entries" component={Entradas} />
          <Route exact path="/entries/add" component={AgregarEntrada} />
        </Switch>
      </div>
    </>
  );
}

export default App;

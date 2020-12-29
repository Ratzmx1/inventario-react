import "./App.css";
import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "./redux/ActionCreators";

// components
import NavBar from "./components/NavBar";
import { Entradas, AgregarEntrada } from "./components/EntradaProducto";
import { AgregarSalida, ListaSalidas } from "./components/SalidaProducto/";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { AgregarProducto } from "./components/Producto";

const Authenticated = ({ Componente, rol }) => {
  const usuario = useSelector((state) => state.user);

  if (usuario.rol && usuario.rol === rol) {
    return <Componente />;
  }
  return <Login />;
};

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      dispatch(setToken(token));
      dispatch(setUser(JSON.parse(user)));
    }
  }, []);

  return (
    <>
      <NavBar />
      <div className={"container"} style={{ marginTop: "5vh" }}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />

          <Route exact path="/entradas">
            <Authenticated Componente={Entradas} rol="ANALISTA" />
          </Route>
          <Route exact path="/entradas/add">
            <Authenticated Componente={AgregarEntrada} rol="ANALISTA" />
          </Route>
          <Route exact path="/salidas">
            <Authenticated Componente={ListaSalidas} rol="ANALISTA" />
          </Route>
          <Route exact path="/salidas/add">
            <Authenticated Componente={AgregarSalida} rol="ANALISTA" />
          </Route>
          <Route exact path="/productos">
            <Authenticated Componente={AgregarProducto} rol="ADMINISTRADOR" />
          </Route>
          <Route component={Login} />
        </Switch>
      </div>
    </>
  );
}

export default App;

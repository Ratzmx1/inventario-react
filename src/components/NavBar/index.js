import React from "react";
import logo from "../../logo.jpg";
import { Link } from "react-router-dom";
import { Navbar, Icon } from "react-materialize";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((state) => state.user);
  if (user.rol === "ADMINISTRADOR") {
    return (
      <Navbar
        alignLinks="right"
        brand={
          <img
            src={logo}
            className="logo"
            style={{ padding: "1vh 3vw", height: "60px", zIndex: 99999 }}
            alt="Logo"
          />
        }
        style={{ backgroundColor: "#663cc0", marginRight: "10px" }}
      >
        <Link to="/">Analistas de inventario</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/">Subcategorias</Link>
        <Link to="/">Categorias</Link>
        <Link to="/">Proveedores</Link>
        <Link to="/logout">
          <Icon>account_circle</Icon>
        </Link>
      </Navbar>
    );
  } else if (user.rol === "ANALISTA") {
    return (
      <Navbar
        alignLinks="right"
        brand={
          <img
            src={logo}
            className="logo"
            style={{ padding: "1vh 3vw", height: "60px", zIndex: 99999 }}
            alt="Logo"
          />
        }
        style={{ backgroundColor: "#663cc0", marginRight: "10px" }}
      >
        <Link to="/entradas">Entrada de productos</Link>
        <Link to="/salidas">Salida de productos</Link>
        <Link to="/logout">
          <Icon>account_circle</Icon>
        </Link>
      </Navbar>
    );
  }
  return (
    <Navbar
      alignLinks="right"
      brand={
        <img
          src={logo}
          className="logo"
          style={{ padding: "1vh 3vw", height: "60px", zIndex: 99999 }}
          alt="Logo"
        />
      }
      style={{ backgroundColor: "#663cc0", marginRight: "10px" }}
    >
      <Link to="/login">
        <Icon>account_circle</Icon>
      </Link>
    </Navbar>
  );
};

export default NavBar;

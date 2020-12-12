import React from "react";
import logo from "../../logo.jpg";
import { Link } from "react-router-dom";
import { Navbar, Icon } from "react-materialize";

const index = () => {
  return (
    <Navbar
      alignLinks="right"
      brand={
        <img
          src={logo}
          className="logo"
          style={{ padding: "1vh 3vw", height: "60px" }}
          alt="Logo"
        />
      }
      style={{ backgroundColor: "#663cc0", marginRight: "10px" }}
    >
      {/* <Link to="/">Subcategorias</Link>
      <Link to="/">Categorias</Link> */}
      <Link to="/entries">Entrada de productos</Link>
      <Link to="/">Salida de productos</Link>
      {/* <Link to="/">Proveedores</Link> */}
      {/* <Link to="/">Analistas de inventario</Link>
      <Link to="/">Categorias</Link> */}
      <Link to="/">
        <Icon>account_circle</Icon>
      </Link>
    </Navbar>
  );
};

export default index;

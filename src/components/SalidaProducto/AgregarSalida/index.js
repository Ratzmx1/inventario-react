import React, { useState, useEffect } from "react";
import {
  ButtonAgregar,
  CardContainer,
  Input,
  SearchContainer,
  Autocomplete,
} from "../../Styles";

// import axios from "axios"

const AgregarEntrada = () => {
  const [products, setProducts] = useState([]);
  const [productSelected, setProdSel] = useState();
  const [idProductSelected, setidProdSel] = useState();
  const [cantidad, setCantidad] = useState();

  useEffect(() => {
    setProducts([
      {
        id: 1,
        nombre: "Zapato",
        subCategoria: 1,
        marca: "Pequeña lulu",
        stockMinimo: 50,
      },
      {
        id: 2,
        nombre: "Chala",
        subCategoria: 1,
        marca: "Pequeña lulu",
        stockMinimo: 50,
      },
      {
        id: 3,
        nombre: "Skate",
        subCategoria: 2,
        marca: "ConiFuentesArt",
        stockMinimo: 50,
      },
    ]);
  }, []);

  const handleSubmit = () => {
    console.log(idProductSelected, parseInt(cantidad, 10));
  };

  return (
    <CardContainer>
      <h1
        style={{
          marginTop: "5vh",
          marginBottom: "5vh",
          textAlign: "center",
          color: "#663cc0",
          fontFamily: "Quicksand",
          fontSize: "3rem",
        }}
      >
        Registrar entrada de productos
      </h1>
      <div style={{ marginLeft: "15%", marginRight: "15%" }}>
        <fieldset
          style={{
            borderRadius: "4px",
            border: "1px solid #bbb",
          }}
        >
          <legend style={{ padding: "0px 5px", color: "#bbb" }}>
            Producto
          </legend>
          <Autocomplete
            items={products}
            getItemValue={(item) => item.nombre}
            renderItem={(item, isHighlighted) => (
              <div
                key={item.id}
                style={{
                  background: isHighlighted ? "lightgray" : "white",
                  border: "1px solid #bbb",
                  margin: "5px 0px",
                  padding: "2px 10px",
                  borderRadius: "8px",
                }}
              >
                {`${item.id} - ${item.nombre} - ${item.marca}`}
              </div>
            )}
            value={productSelected}
            onChange={(e) => setProdSel(e.target.value)}
            onSelect={(val, item) => {
              setProdSel(val);
              setidProdSel(item.id);
            }}
            menuStyle={{
              outline: "none",
              width: "100%",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
            wrapperStyle={{
              outline: "none !important",
              border: "none !important",
              width: "100%",
              padding: "0px 0.5vw",
              boxShadow: "none !important",
            }}
          />
        </fieldset>
        <fieldset
          style={{
            borderRadius: "4px",
            border: "1px solid #bbb",
            marginTop: "8px",
          }}
        >
          <legend style={{ padding: "0px 5px", color: "#bbb" }}>
            Cantidad
          </legend>
          <Input
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </fieldset>

        <ButtonAgregar style={{ marginBottom: "2vh" }} onClick={handleSubmit}>
          Insertar
        </ButtonAgregar>
      </div>
    </CardContainer>
  );
};
export default AgregarEntrada;

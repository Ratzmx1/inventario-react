import React, { useState, useEffect } from "react";
import {
  ButtonAgregar,
  CardContainer,
  Input,
  SearchContainer,
  Autocomplete,
} from "../../Styles";

const AgregarEntrada = () => {
  const [products, setProducts] = useState([]);
  const [productSelected, setProdSel] = useState();
  const [idProductSelected, setidProdSel] = useState();

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
  console.log(idProductSelected);
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
            borderRadius: "8px",
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
        <SearchContainer>
          <Input type="number" placeholder="Cantidad" />
        </SearchContainer>

        <ButtonAgregar style={{ marginBottom: "2vh" }}>Insertar</ButtonAgregar>
      </div>
    </CardContainer>
  );
};

export default AgregarEntrada;

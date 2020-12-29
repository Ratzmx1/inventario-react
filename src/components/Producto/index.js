import React from "react";

import {
  CardContainer,
  Autocomplete,
  SearchContainer,
  ButtonAgregar,
  Input,
} from "../Styles";

const AgregarProducto = () => {
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
        <SearchContainer>
          <Input
            type="text"
            // value={cantidad}
            // onChange={(e) => setCantidad(e.target.value)}
            placeholder="Nombre"
          />
        </SearchContainer>

        <fieldset
          style={{
            borderRadius: "8px",
            border: "1px solid #bbb",
            marginTop: "8px",
          }}
        >
          <legend style={{ padding: "0px 5px", color: "#bbb" }}>
            SubCategoria
          </legend>
          {/* <Autocomplete
        // items={products}
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
        // value={productSelected}
        // onChange={(e) => setProdSel(e.target.value)}
        // onSelect={(val, item) => {
        //   setProdSel(val);
        //   setidProdSel(item.id);
        // }}
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
      /> */}
        </fieldset>
        <SearchContainer>
          <Input
            type="text"
            // value={cantidad}
            // onChange={(e) => setCantidad(e.target.value)}
            placeholder="Marca"
          />
        </SearchContainer>
        <SearchContainer>
          <Input
            type="number"
            // value={cantidad}
            // onChange={(e) => setCantidad(e.target.value)}
            placeholder="Stock Minimo"
          />
        </SearchContainer>

        <ButtonAgregar style={{ marginBottom: "2vh" }}>Insertar</ButtonAgregar>
      </div>
    </CardContainer>
  );
};

export { AgregarProducto };

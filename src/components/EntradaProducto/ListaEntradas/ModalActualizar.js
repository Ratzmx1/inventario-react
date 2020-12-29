import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-materialize";
import { Input, Autocomplete } from "../../Styles";

export const ModalActualizar = ({ item }) => {
  const [products, setProducts] = useState([]);
  const [productSelected, setProdSel] = useState();
  const [idProductSelected, setidProdSel] = useState();
  const [nOrden, setNOrden] = useState(item.orden);
  const [cantidad, setCantidad] = useState();

  const handleSubmit = () => {
    // window.location.reload();
  };

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
  return (
    <Modal
      actions={[
        <Button
          style={{
            margin: "0px 10px",
            backgroundColor: "gray",
            width: "15%",
            borderRadius: "8px",
          }}
          node="button"
          waves="red"
          modal="close"
        >
          Cancelar
        </Button>,
        <Button
          style={{
            margin: "0px 10px",
            backgroundColor: "#663cc0",
            width: "15%",
            borderRadius: "8px",
          }}
          modal="confirm"
          onClick={handleSubmit}
          node="button"
          waves="green"
        >
          Actualizar
        </Button>,
      ]}
      header="Actualizar Entrada de Producto"
      id="Modal-0"
      options={{
        dismissible: true,
        endingTop: "10%",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        opacity: 0.5,
        outDuration: 250,
        preventScrolling: true,
        startingTop: "4%",
      }}
      trigger={
        <Button
          small
          style={{
            backgroundColor: "#ffc107",
            borderRadius: "4px",
            color: "#000",
          }}
        >
          Actualizar
        </Button>
      }
    >
      <div style={{ padding: "15px 20%" }}>
        <fieldset
          style={{
            borderRadius: "4px",
            border: "1px solid #bbb",
            marginTop: "20px ",
          }}
        >
          <legend style={{ padding: "0px 5px", color: "#aaa" }}>
            Numero de orden
          </legend>
          <Input
            type="number"
            value={nOrden}
            onChange={(e) => setNOrden(e.target.value)}
          />
        </fieldset>
        <fieldset
          style={{
            borderRadius: "4px",
            border: "1px solid #bbb",
            marginTop: "20px ",
          }}
        >
          <legend style={{ padding: "0px 5px", color: "#aaa" }}>
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
                  borderRadius: "4px",
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
            marginTop: "20px ",
          }}
        >
          <legend style={{ padding: "0px 5px", color: "#aaa" }}>
            Cantidad
          </legend>
          <Input
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </fieldset>
        {/* <SearchContainer>
          <Input type="number" placeholder="Cantidad" />
        </SearchContainer> */}

        <fieldset
          style={{
            borderRadius: "4px",
            border: "1px solid #bbb",
            marginTop: "20px ",
          }}
        >
          <legend style={{ padding: "0px 5px", color: "#aaa" }}>
            Proveedor
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
                  borderRadius: "4px",
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
      </div>
    </Modal>
  );
};

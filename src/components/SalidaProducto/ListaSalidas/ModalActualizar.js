import React from "react";
import { Button, Modal } from "react-materialize";

export const ModalActualizar = ({ item }) => {
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
          onClick={async () => {
            await console.log("Updating Database");
            window.location.reload();
          }}
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
    ></Modal>
  );
};

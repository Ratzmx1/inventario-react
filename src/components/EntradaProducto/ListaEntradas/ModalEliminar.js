import React from "react";
import { Button, Modal } from "react-materialize";

// AXIOS
import axios from "axios";
import { baseUrl } from "../../../shared/baseUrl";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setToken, setUser } from "../../../redux/ActionCreators";


export const ModalEliminar = ({ item }) => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch()
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
          onClick={() => {
            axios
              .post(
                `${baseUrl}/entries/EliminarInput`,
                { id: item.id },
                { headers: { authorization: token } }
              )
              .then(() => {
                window.location.reload();
              }).catch((e) => {
        if (e.response.status === 401) {
          dispatch(setToken(""));
          dispatch(setUser({}));
        }
      });
          }}
          node="button"
          waves="green"
        >
          Eliminar
        </Button>,
      ]}
      header="¿Esta Seguro?"
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
            backgroundColor: "#dc3545",
            color: "#FFF",
            borderRadius: "4px",
            margin: "0px 5px",
          }}
        >
          Eliminar
        </Button>
      }
    >
      <p>Esta seguro que desea eliminar la entrada de producto</p>
      <div style={{ marginLeft: "7%" }}>
        <ul>
          <li>{`ID:        ${item.id}`}</li>
          <li>{`N° Orden:  ${item.orden}`}</li>
          <li>{`Nombre:    ${item.nombre_prod}`}</li>
          <li>{`Fecha:     ${item.fecha}`}</li>
          <li>{`Cantidad:  ${item.cantidad}`}</li>
          <li>{`Proveedor: ${item.nombre_prov}`}</li>
        </ul>
      </div>
    </Modal>
  );
};

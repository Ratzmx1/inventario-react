import React from "react";
import { Td } from "../../Styles";
import { ModalActualizar } from "./ModalActualizar";
import { ModalEliminar } from "./ModalEliminar";

const TableRow = ({ item }) => {
  return (
    <tr key={item.id}>
      <Td>{item.id}</Td>
      <Td>{item.orden}</Td>
      <Td>{item.nombre_prod}</Td>
      <Td>{item.cantidad}</Td>
      <Td>{item.nombre_prov}</Td>
      <Td>{item.nombre_user}</Td>
      <Td>{item.fecha}</Td>
      <Td style={{ width: "12vw" }}>
        <ModalActualizar item={item} />

        <ModalEliminar item={item} />
      </Td>
    </tr>
  );
};

export default TableRow;

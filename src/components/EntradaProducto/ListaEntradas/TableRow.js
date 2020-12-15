import React from "react";
import { Td } from "../../Styles";
import { ModalActualizar } from "./ModalActualizar";
import { ModalEliminar } from "./ModalEliminar";

const TableRow = ({ item }) => {
  return (
    <tr key={item.id}>
      <Td>{item.id}</Td>
      <Td>{item.orden}</Td>
      <Td>{item.producto}</Td>
      <Td>{item.cantidad}</Td>
      <Td>{item.proveedor}</Td>
      <Td>{item.analista}</Td>
      <Td>{item.fecha}</Td>
      <Td style={{ width: "12vw" }}>
        <ModalActualizar item={item} />

        <ModalEliminar item={item} />
      </Td>
    </tr>
  );
};

export default TableRow;

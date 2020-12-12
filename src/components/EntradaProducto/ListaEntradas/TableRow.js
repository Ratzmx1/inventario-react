import React from "react";
import { Button } from "react-materialize";
import { Td } from "./productosStyles";
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
        <Button
          small
          style={{
            backgroundColor: "#ffc107",
            color: "#212529",
            borderRadius: "4px",
          }}
        >
          Actualizar
        </Button>
        <Button
          small
          style={{
            marginLeft: "8px",
            borderRadius: "4px",
            backgroundColor: "#dc3545",
          }}
        >
          Eliminar
        </Button>
      </Td>
    </tr>
  );
};

export default TableRow;

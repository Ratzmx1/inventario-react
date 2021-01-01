import React from "react";
import { Td } from "../../Styles";
import { Button } from "react-materialize";

// Rut

import { calcular } from "../../../shared/formateaRut";

const TableRow = ({ item }) => {
  return (
    <tr key={item.id}>
      <Td>{item.id}</Td>
      <Td>{item.nombre}</Td>
      <Td>{item.cantidad}</Td>
      <Td>{`${item.rut}-${calcular(item.rut)}`}</Td>
      <Td>{`${item.nombres} ${item.apellidos} `}</Td>
      <Td>{item.fecha}</Td>
      <Td style={{ width: "12vw" }}>
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
      </Td>
    </tr>
  );
};

export default TableRow;

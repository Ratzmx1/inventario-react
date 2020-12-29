import React from "react";

// import TableRow from "./TableRow";

import { Row, Col, Select } from "react-materialize";
import {
  Th,
  Table,
  Input,
  Icon,
  SearchContainer,
  ButtonAgregar,
  Link,
} from "../../Styles";

const Salidas = () => {
  return (
    <>
      <h1
        style={{
          marginTop: "5vh",
          marginBottom: "5vh",
          textAlign: "center",
          color: "#663cc0",
          fontFamily: "Quicksand",
        }}
      >
        Salidas de productos
      </h1>

      <Row style={{ height: "35px" }}>
        <Col s={2} offset="s4">
          <Select
          // onChange={(v) => {
          //   setOrder(v.target.value);
          // }}
          // value={order}
          >
            <option value="1">ID Ascendente</option>
            <option value="2">ID Descendente</option>
            <option value="3">Orden Ascendente</option>
            <option value="4">Orden Descendente</option>
            <option value="5">Nombre Ascendente</option>
            <option value="6">Nombre Descendente</option>
            <option value="7">Fecha Ascendente</option>
            <option value="8">Fecha Descendente</option>
          </Select>
        </Col>
        <Col s={3}>
          <SearchContainer>
            <Input
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
              placeholder="Busqueda"
            />
            <Icon className="fas fa-search" />
          </SearchContainer>
        </Col>
        <Col s={3}>
          <Link to="/salidas/add">
            <ButtonAgregar>Agregar Salida de Producto</ButtonAgregar>
          </Link>
        </Col>
      </Row>
      <Table responsive hoverable striped>
        <thead className="">
          <tr>
            <Th>ID</Th>
            <Th>Nª Orden</Th>
            <Th>Producto</Th>
            <Th>Cantidad</Th>
            <Th>Proveedor</Th>
            <Th>Analista</Th>
            <Th>Fecha</Th>
            <Th>Acciones</Th>
          </tr>
        </thead>
        <tbody>
          {/* {ordered.map((item) => (
            <TableRow key={item.id} item={item} />
          ))} */}
        </tbody>
      </Table>
    </>
  );
};

export default Salidas;

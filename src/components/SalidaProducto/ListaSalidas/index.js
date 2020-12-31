import React, { useEffect, useState } from "react";

import TableRow from "./TableRow";

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

// Consulta
import axios from "axios";
import { baseUrl } from "../../../shared/baseUrl";

// Redux

import { useSelector, useDispatch } from "react-redux";
import { setToken, setUser } from "../../../redux/ActionCreators";

const Salidas = () => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const [salidas, setSalidas] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/outs/productos_salida`, {
        headers: { authorization: token },
      })
      .then((res) => res.data.data)
      .then((data) => setSalidas(data))
      .catch((e) => {
        if (e.response.status === 401) {
          dispatch(setToken(""));
          dispatch(setUser({}));
        }
      });
  }, []);

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
              placeholder="Búsqueda"
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
            <Th>Producto</Th>
            <Th>Cantidad</Th>
            <Th>Rut analista</Th>
            <Th>Analista</Th>
            <Th>Fecha</Th>
            <Th>Acciones</Th>
          </tr>
        </thead>
        <tbody>
          {salidas.map((item) => (
            <TableRow key={item.id} item={item} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Salidas;

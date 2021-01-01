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

import { calcular } from "../../../shared/formateaRut";

const Salidas = () => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const [salidas, setSalidas] = useState([]);
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("1");
  const [ordered, setOrdered] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/outs/productos_salida`, {
        headers: { authorization: token },
      })
      .then((res) => res.data.data)
      .then((data) => setSalidas(data.sort((a, b) => a.id - b.id)))
      .catch((e) => {
        if (e.response.status === 401) {
          dispatch(setToken(""));
          dispatch(setUser({}));
        }
      });
  }, []);

  useEffect(() => {
    const sel = salidas.filter(
      (item) =>
        item.fecha.includes(search) ||
        `${item.rut}-${calcular(item.rut)}`.includes(search) ||
        item.nombre.toUpperCase().includes(search.toUpperCase()) ||
        item.id.toString().toUpperCase().includes(search.toUpperCase()) ||
        (item.nombres + item.apellidos)
          .toUpperCase()
          .includes(search.toUpperCase())
    );
    setSelected(sel);
  }, [salidas, search]);

  useEffect(() => {
    const compare = (a, b) => {
      a = a.toString().trim().toUpperCase();
      b = b.toString().trim().toUpperCase();
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }
      return 0;
    };

    let or;
    switch (order) {
      case "1":
        or = selected.sort((a, b) => b.id - a.id);
        break;
      case "2":
        or = selected.sort((a, b) => a.id - b.id);
        break;
      case "3":
        or = selected.sort((a, b) =>
          compare(b.nombre.toUpperCase(), a.nombre.toUpperCase())
        );
        break;
      case "4":
        or = selected.sort((a, b) =>
          compare(a.nombre.toUpperCase(), b.nombre.toUpperCase())
        );
        break;
      default:
        or = selected;
        break;
    }
    setOrdered(or);
  }, [order, selected]);

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
            onChange={(v) => {
              setOrder(v.target.value);
            }}
            value={order}
          >
            <option value="1">ID Ascendente</option>
            <option value="2">ID Descendente</option>
            <option value="3">Nombre Ascendente</option>
            <option value="4">Nombre Descendente</option>
          </Select>
        </Col>
        <Col s={3}>
          <SearchContainer>
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
          {ordered.map((item) => (
            <TableRow key={item.id} item={item} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Salidas;

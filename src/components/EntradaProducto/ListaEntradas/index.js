import React, { useState, useEffect } from "react";

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

import Swal from "sweetalert2";

const Entradas = () => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("2");
  const [ordered, setOrdered] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/entries/view`, { headers: { authorization: token } })
      .then((res) => res.data)
      .then((response) => {
        const lista = response.data.result.sort((a, b) => a.id - b.id);
        setProducts(lista);
      })
      .catch((e) => {
        if (e.response.status === 401) {
          Swal.fire("Error", "Unauthorized", "error").then(() => {
            dispatch(setToken(""));
            dispatch(setUser({}));
          });
        }
      });
  }, []);

  useEffect(() => {
    const sel = products.filter(
      (item) =>
        item.nombre_prod.toUpperCase().includes(search.toUpperCase()) ||
        item.nombre_user.toUpperCase().includes(search.toUpperCase()) ||
        item.nombre_prov.toUpperCase().includes(search.toUpperCase()) ||
        item.id.toString().toUpperCase().includes(search.toUpperCase()) ||
        item.orden.toString().toUpperCase().includes(search.toUpperCase())
    );
    setSelected(sel);
  }, [products, search]);

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
    console.log(order);
    switch (order) {
      case "1":
        or = selected.sort((a, b) => b.id - a.id);
        break;
      case "2":
        or = selected.sort((a, b) => a.id - b.id);
        break;
      case "3":
        or = selected.sort((a, b) => b.orden - a.orden);
        break;
      case "4":
        or = selected.sort((a, b) => a.orden - b.orden);
        break;
      case "5":
        or = selected.sort((a, b) =>
          compare(b.nombre_prod.toUpperCase(), a.nombre_prod.toUpperCase())
        );
        break;
      case "6":
        or = selected.sort((a, b) =>
          compare(a.nombre_prod.toUpperCase(), b.nombre_prod.toUpperCase())
        );
        break;
      default:
        or = selected;
        break;
    }
    console.log(or);
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
        Entradas de productos
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
            <option value="3">Orden Ascendente</option>
            <option value="4">Orden Descendente</option>
            <option value="5">Nombre Ascendente</option>
            <option value="6">Nombre Descendente</option>
          </Select>
        </Col>
        <Col s={3}>
          <SearchContainer>
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Busqueda"
            />
            <Icon className="fas fa-search" />
          </SearchContainer>
        </Col>
        <Col s={3}>
          <Link to="/entradas/add">
            <ButtonAgregar>Agregar Entrada de Producto</ButtonAgregar>
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
          {ordered.map((item) => (
            <TableRow key={item.id} item={item} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Entradas;

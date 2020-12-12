import React, { useState, useEffect } from "react";

import TableRow from "./TableRow";
import { Row, Col, Select } from "react-materialize";
import {
  Th,
  Table,
  SearchInput,
  Icon,
  SearchContainer,
  ButtonAgregar,
  Link,
} from "./productosStyles";

const Entradas = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      orden: 752085,
      producto: "Zapato",
      cantidad: 150,
      proveedor: "Camila Lulu",
      analista: "Camila Flores",
      fecha: "2020/12/02",
    },
  ]);
  const [selected, setselected] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState();
  const [ordered, setOrdered] = useState([]);

  useEffect(() => {
    setProducts([
      {
        id: 1,
        orden: 752085,
        producto: "Zapato",
        cantidad: 150,
        proveedor: "Camila Lulu",
        analista: "Camila Flores",
        fecha: "2020/12/02",
      },
      {
        id: 2,
        orden: 752085,
        producto: "Botin",
        cantidad: 150,
        proveedor: "Camila Lulu",
        analista: "Camila Flores",
        fecha: "2020/12/02",
      },
      {
        id: 3,
        orden: 752085,
        producto: "Chala Zico",
        cantidad: 150,
        proveedor: "Camila Lulu",
        analista: "Camila Flores",
        fecha: "2020/12/02",
      },
      {
        id: 4,
        orden: 752055,
        producto: "Skate",
        cantidad: 150,
        proveedor: "ConiFuentesArt",
        analista: "Enzo Pigatti",
        fecha: "2020/06/29",
      },
    ]);
  }, []);

  useEffect(() => {
    const sel = products.filter(
      (item) =>
        item.fecha.toUpperCase().includes(search.toUpperCase()) ||
        item.producto.toUpperCase().includes(search.toUpperCase()) ||
        item.analista.toUpperCase().includes(search.toUpperCase()) ||
        item.proveedor.toUpperCase().includes(search.toUpperCase()) ||
        item.orden.toString().toUpperCase().includes(search.toUpperCase())
    );
    setselected(sel);
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
    switch (order) {
      case "1":
        or = selected.sort((a, b) => b.id - a.id);
        break;
      case "2":
        or = selected.sort((a, b) => a.id - b.id);
        break;
      case "3":
        or = selected.sort((a, b) => b.order - a.order);
        break;
      case "4":
        or = selected.sort((a, b) => a.order - b.order);
        break;
      case "5":
        or = selected.sort((a, b) =>
          compare(b.producto.toUpperCase(), a.producto.toUpperCase())
        );
        break;
      case "6":
        or = selected.sort((a, b) =>
          compare(a.producto.toUpperCase(), b.producto.toUpperCase())
        );
        break;
      case "7":
        or = selected.sort((a, b) =>
          compare(new Date(a.fecha), new Date(b.fecha))
        );
        break;
      case "8":
        or = selected.sort((a, b) =>
          compare(new Date(b.fecha), new Date(a.fecha))
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
        Entradas de productos
      </h1>

      <Row style={{ height: "35px" }}>
        <Col s={2} offset="s5">
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
            <option value="7">Fecha Ascendente</option>
            <option value="8">Fecha Descendente</option>
          </Select>
        </Col>
        <Col s={3}>
          <SearchContainer>
            <SearchInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Busqueda"
            />
            <Icon className="fas fa-search" />
          </SearchContainer>
        </Col>
        <Col s={2}>
          <ButtonAgregar>
            <Link to="/entries/add">Agregar Entrada</Link>
          </ButtonAgregar>
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

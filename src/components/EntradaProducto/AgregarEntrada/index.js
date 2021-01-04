import React, { useState, useEffect } from "react";
import {
  ButtonAgregar,
  CardContainer,
  Input,
  Autocomplete,
} from "../../Styles";

import { baseUrl } from "../../../shared/baseUrl";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { setToken, setUser } from "../../../redux/ActionCreators";

import Swal from "sweetalert2";

const AgregarEntrada = () => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [productSelected, setProdSel] = useState("");
  const [idProductSelected, setIdProdSel] = useState(0);

  const [proveedores, setProveedores] = useState([]);
  const [provSel, setProvSel] = useState("");
  const [idProvSel, setIdProvSel] = useState(0);

  const [orden, setOrden] = useState(0);
  const [cantidad, setCantidad] = useState(0);

  const handleSubmit = () => {
    const norden = parseInt(orden);
    const cant = parseInt(cantidad);
    if (cantidad <= 0) {
      Swal.fire("Error", "La cantidad debe ser positiva", "error");
    } else {
      axios
        .post(
          `${baseUrl}/entries/input`,
          {
            orden: norden,
            cantidad: cant,
            id_producto: idProductSelected,
            id_proveedor: idProvSel,
          },
          { headers: { authorization: token } }
        )
        .then((response) => {
          if (response.status === 200) {
            Swal.fire(
              "Success",
              "Entrada de producto registrada correctamente",
              "success"
            ).then(() => window.location.replace("/entradas"));
          }
          console.log(response);
        })
        .catch((e) => {
          if (e.response.status === 401) {
            Swal.fire("Error", "Unauthorized", "error").then(() => {
              dispatch(setToken(""));
              dispatch(setUser({}));
            });
          }
        });
    }
  };

  // CONSULTA PROVEEDORES
  useEffect(() => {
    axios
      .get(`${baseUrl}/providers/view`, {
        headers: { authorization: token },
      })
      .then((res) => res.data.data)
      .then((data) => setProveedores(data.result))
      .catch((e) => {
        if (e.response.status === 401) {
          Swal.fire("Error", "Unauthorized", "error").then(() => {
            dispatch(setToken(""));
            dispatch(setUser({}));
          });
        }
      });
  }, []);

  // CONSULTA PRODUCTOS
  useEffect(() => {
    axios
      .get(`${baseUrl}/products/view`, {
        headers: { authorization: token },
      })
      .then((res) => res.data.data)
      .then((data) => setProducts(data.result))
      .catch((e) => {
        if (e.response.status === 401) {
          Swal.fire("Error", "Unauthorized", "error").then(() => {
            dispatch(setToken(""));
            dispatch(setUser({}));
          });
        }
      });
  }, []);

  return (
    <CardContainer>
      <h1
        style={{
          marginTop: "5vh",
          marginBottom: "5vh",
          textAlign: "center",
          color: "#663cc0",
          fontFamily: "Quicksand",
          fontSize: "3rem",
        }}
      >
        Registrar entrada de productos
      </h1>
      <div style={{ marginLeft: "15%", marginRight: "15%" }}>
        <fieldset
          style={{
            borderRadius: "4px",
            border: "1px solid #bbb",
            marginTop: "20px ",
          }}
        >
          <legend style={{ padding: "0px 5px", color: "#aaa" }}>
            Numero de orden
          </legend>
          <Input
            type="number"
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
          />
        </fieldset>
        <fieldset
          style={{
            borderRadius: "4px",
            border: "1px solid #bbb",
            marginTop: "20px ",
          }}
        >
          <legend style={{ padding: "0px 5px", color: "#aaa" }}>
            Producto
          </legend>
          <Autocomplete
            items={products}
            getItemValue={(item) => item.nombre_prod}
            renderItem={(item, isHighlighted) => (
              <div
                style={{
                  background: isHighlighted ? "lightgray" : "white",
                  border: "1px solid #bbb",
                  margin: "5px 0px",
                  padding: "2px 10px",
                  borderRadius: "4px",
                }}
                key={item.id_prod}
              >
                {`${item.id_prod} - ${item.nombre_prod} - ${item.marca_prod}`}
              </div>
            )}
            value={productSelected}
            onChange={(e) => setProdSel(e.target.value)}
            onSelect={(val, item) => {
              setProdSel(val);
              setIdProdSel(item.id_prod);
            }}
            menuStyle={{
              outline: "none",
              width: "100%",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
            wrapperStyle={{
              outline: "none !important",
              border: "none !important",
              width: "100%",
              padding: "0px 0.5vw",
              boxShadow: "none !important",
            }}
          />
        </fieldset>

        <fieldset
          style={{
            borderRadius: "4px",
            border: "1px solid #bbb",
            marginTop: "20px ",
          }}
        >
          <legend style={{ padding: "0px 5px", color: "#aaa" }}>
            Cantidad
          </legend>
          <Input
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </fieldset>

        <fieldset
          style={{
            borderRadius: "4px",
            border: "1px solid #bbb",
            marginTop: "20px ",
          }}
        >
          <legend style={{ padding: "0px 5px", color: "#aaa" }}>
            Proveedor
          </legend>
          <Autocomplete
            items={proveedores}
            getItemValue={(item) => item.nombre_prov}
            renderItem={(item, isHighlighted) => (
              <div
                style={{
                  background: isHighlighted ? "lightgray" : "white",
                  border: "1px solid #bbb",
                  margin: "5px 0px",
                  padding: "2px 10px",
                  borderRadius: "4px",
                }}
                key={item.id_prov}
              >
                {`${item.id_prov} - ${item.nombre_prov} - ${item.telef_prov}`}
              </div>
            )}
            value={provSel}
            onChange={(e) => setProvSel(e.target.value)}
            onSelect={(val, item) => {
              setProvSel(val);
              setIdProvSel(item.id_prov);
            }}
            menuStyle={{
              outline: "none",
              width: "100%",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
            wrapperStyle={{
              outline: "none !important",
              border: "none !important",
              width: "100%",
              padding: "0px 0.5vw",
              boxShadow: "none !important",
            }}
          />
        </fieldset>

        <ButtonAgregar style={{ marginBottom: "2vh" }} onClick={handleSubmit}>
          Insertar
        </ButtonAgregar>
      </div>
    </CardContainer>
  );
};

export default AgregarEntrada;

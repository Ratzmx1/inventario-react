import React, { useState, useEffect } from "react";
import {
  ButtonAgregar,
  CardContainer,
  Input,
  Autocomplete,
} from "../../Styles";
import { Chip } from "react-materialize";

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

  const [cantidad, setCantidad] = useState(0);

  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

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
          dispatch(setToken(""));
          dispatch(setUser({}));
        }
      });
  }, []);

  const handleSubmit = () => {
    if (cantidad <= 0) {
      Swal.fire("Error", "La cantidad debe ser positiva", "error");
    } else {
      axios
        .post(
          `${baseUrl}/outs/sacar_producto`,
          { id_producto: idProductSelected, cantidad },
          {
            headers: { authorization: token },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            Swal.fire(
              "Success",
              "Salida de producto registrada correctamente",
              "success"
            ).then(() => window.location.replace("/salidas"));
          }
          console.log(response);
        })
        .catch((e) => {
          if (e.response.status === 401) {
            Swal.fire("Error", "Unauthorized", "error").then(() => {
              dispatch(setToken(""));
              dispatch(setUser({}));
            });
          } else if (e.response.status === 404) {
            setMessage(e.response.data.mensaje);
            setShowAlert(true);
          }
        });
    }
  };

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
        Registrar salida de productos
      </h1>
      <div style={{ marginLeft: "15%", marginRight: "15%" }}>
        <fieldset
          style={{
            borderRadius: "4px",
            border: "1px solid #bbb",
          }}
        >
          <legend style={{ padding: "0px 5px", color: "#bbb" }}>
            Producto
          </legend>
          <Autocomplete
            items={products}
            getItemValue={(item) => item.nombre_prod}
            renderItem={(item, isHighlighted) => (
              <div
                key={item.id_prod}
                style={{
                  background: isHighlighted ? "lightgray" : "white",
                  border: "1px solid #bbb",
                  margin: "5px 0px",
                  padding: "2px 10px",
                  borderRadius: "8px",
                }}
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
            marginTop: "8px",
          }}
        >
          <legend style={{ padding: "0px 5px", color: "#bbb" }}>
            Cantidad
          </legend>
          <Input
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </fieldset>
        {showAlert && (
          <Chip
            close={false}
            options={null}
            style={{
              width: "100%",
              textAlign: "center",
              backgroundColor: "#dc3545",
              color: "#fff",
              fontSize: "1.1rem",
              margin: "20px 0px 0px 0px",
            }}
          >
            {message}
          </Chip>
        )}
        <ButtonAgregar style={{ marginBottom: "2vh" }} onClick={handleSubmit}>
          Insertar
        </ButtonAgregar>
      </div>
    </CardContainer>
  );
};
export default AgregarEntrada;

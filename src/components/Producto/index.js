import React, { useState, useEffect } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setToken, setUser } from "../../redux/ActionCreators";

//Axios
import axios from "axios";
import { baseUrl } from "../../shared/baseUrl";

import { CardContainer, Autocomplete, ButtonAgregar, Input } from "../Styles";

import Swal from "sweetalert2";

const AgregarProducto = () => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const [SubCategories, setSubCategories] = useState([]);
  const [SubCat, setSubCat] = useState("");
  const [idSubCat, setIdSubCat] = useState(0);

  const [marca, setMarca] = useState("");
  const [stockMin, setStockMin] = useState(0);
  const [nombre, setNombre] = useState("");

  const handleSubmit = () => {
    if (stockMin <= 0) {
      Swal.fire("Error", "El stock minimo debe ser positivo", "error");
    } else {
      axios
        .post(
          `${baseUrl}/products/agregar`,
          {
            nombre,
            id_sub_cat: idSubCat,
            marca,
            stock: 0,
            stock_min: stockMin,
          },
          {
            headers: { authorization: token },
          }
        )
        .then(() => {
          Swal.fire(
            "Success",
            "Producto registrado correctamente",
            "success"
          ).then(() => window.location.reload());
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

  useEffect(() => {
    axios
      .get(`${baseUrl}/subcategories/view`, {
        headers: { authorization: token },
      })
      .then((res) => res.data.data)
      .then((data) => setSubCategories(data.result))
      .catch((e) => {
        if (e.response.status === 401) {
          dispatch(setToken(""));
          dispatch(setUser({}));
        }
      });
  }, []);
  console.log(SubCat);
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
        Registrar producto
      </h1>
      <div style={{ marginLeft: "15%", marginRight: "15%" }}>
        <fieldset
          style={{
            borderRadius: "8px",
            border: "1px solid #bbb",
            marginTop: "8px",
          }}
        >
          <legend style={{ padding: "0px 5px", color: "#bbb" }}>Nombre</legend>
          <Input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </fieldset>

        <fieldset
          style={{
            borderRadius: "8px",
            border: "1px solid #bbb",
            marginTop: "8px",
          }}
        >
          <legend style={{ padding: "0px 5px", color: "#bbb" }}>
            Sub Categoría
          </legend>
          <Autocomplete
            items={SubCategories}
            getItemValue={(item) => item.nombre_subcat}
            renderItem={(item, isHighlighted) => (
              <div
                key={item.id_subcat}
                style={{
                  background: isHighlighted ? "lightgray" : "white",
                  border: "1px solid #bbb",
                  margin: "5px 0px",
                  padding: "2px 10px",
                  borderRadius: "8px",
                }}
              >
                {`${item.id_subcat} - ${item.nombre_subcat} - ${item.nombre_cat}`}
              </div>
            )}
            value={SubCat}
            onChange={(e) => setSubCat(e.target.value)}
            onSelect={(val, item) => {
              setSubCat(val);
              setIdSubCat(item.id_subcat);
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
            borderRadius: "8px",
            border: "1px solid #bbb",
            marginTop: "8px",
          }}
        >
          <legend style={{ padding: "0px 5px", color: "#bbb" }}>Marca</legend>
          <Input
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </fieldset>

        <fieldset
          style={{
            borderRadius: "8px",
            border: "1px solid #bbb",
            marginTop: "8px",
          }}
        >
          <legend style={{ padding: "0px 5px", color: "#bbb" }}>
            Stock Mínimo
          </legend>
          <Input
            type="number"
            value={stockMin}
            onChange={(e) => setStockMin(e.target.value)}
          />
        </fieldset>

        <ButtonAgregar style={{ marginBottom: "2vh" }} onClick={handleSubmit}>
          Insertar
        </ButtonAgregar>
      </div>
    </CardContainer>
  );
};

export { AgregarProducto };

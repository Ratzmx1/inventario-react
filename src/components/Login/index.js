import React, { useState } from "react";

// UI
import { Chip } from "react-materialize";
import {
  CardContainer,
  Input,
  ButtonAgregar,
  SearchContainer,
} from "../Styles";

// redux
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../redux/ActionCreators";

// axios
import Axios from "axios";
import { baseUrl } from "../../shared/baseUrl";

import Swal from "sweetalert2";

const Login = () => {
  const dispatch = useDispatch();
  const [login, setlogin] = useState("");
  const [pass, setpass] = useState("");
  const [logged, setLogged] = useState("0");
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`${baseUrl}/user/login`, { rut: login, pass })
      .then((res) => {
        return res.data;
      })
      .then(({ data }) => {
        Swal.fire("Success", "Sesión iniciada correctamente", "success").then(
          () => {
            dispatch(setToken(data.token));
            dispatch(setUser(data.user));
          }
        );
        setLogged("1");
      })
      .catch((e) => {
        if (e.response) {
          Swal.fire("Success", `${e.response.data.message}`, "success").then(
            () => {
              dispatch(setToken(""));
              dispatch(setUser({}));
            }
          );
          setLogged("-1");
          setMessage(e.response.data.message);
        }
      });
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
        }}
      >
        Login
      </h1>
      <div style={{ margin: "0px 15%" }}>
        <form onSubmit={handleSubmit}>
          <SearchContainer>
            <Input
              placeholder="Login"
              value={login}
              onChange={(e) => setlogin(e.target.value)}
            />
          </SearchContainer>
          <SearchContainer>
            <Input
              placeholder="Password"
              type="password"
              value={pass}
              onChange={(e) => setpass(e.target.value)}
            />
          </SearchContainer>
          {logged === "1" && (
            <Chip
              close={false}
              options={null}
              style={{
                width: "100%",
                textAlign: "center",
                backgroundColor: "#28a745",
                color: "#111",
                fontSize: "1.1rem",
                margin: "20px 0px 0px 0px",
              }}
            >
              Sesión iniciada correctamente
            </Chip>
          )}
          {logged === "-1" && (
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
          <ButtonAgregar
            style={{
              marginBottom: "3vw",
              marginTop: "2vw",
              backgroundColor: "#663cc0",
            }}
          >
            Login
          </ButtonAgregar>
        </form>
      </div>
    </CardContainer>
  );
};

export { Login };

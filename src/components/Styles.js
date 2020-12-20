import styled from "styled-components";
import { Table as Tab, Button } from "react-materialize";
import { Link as Li } from "react-router-dom";
import Auto from "react-autocomplete";

export const Th = styled.th`
  border: none;
  background-color: #663cc0;
  color: white;
  border: 1px solid #ddd;
  border-radius: 0px;
`;

export const Td = styled.td`
  border: none;
  border: 1px solid #ddd;
  border-radius: 0px;
`;

export const Table = styled(Tab)`
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  border: none !important;
  width: 100%;
  margin-left: 10px !important;
  outline: none !important;
  height: 30px !important;
  margin-top: 4px !important;
  font-size: 15px !important;
  &:focus {
    border-bottom: none !important;
    box-shadow: none !important;
  }
`;

export const Icon = styled.i`
  padding: 14px 10px;
  color: white;
  min-width: 50px;
  text-align: center;
  background-color: #663cc0;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #bbb;
  border-radius: 8px;
  margin-top: 20px;
`;

export const ButtonAgregar = styled(Button)`
  width: 100%;
  background-color: #663cc0;
  margin-top: 20px;
  height: 43px;
  border-radius: 11px;
  &:hover {
    background-color: #663cc0;
  }
`;

export const Link = styled(Li)`
  text-decoration: none;
  color: white;
`;

export const CardContainer = styled.div`
  border: 1px solid #ddd;
  background-color: #fff;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: auto;
  width: 40vw;
`;

export const Autocomplete = styled(Auto)`
  padding-left: 30px !important;
`;

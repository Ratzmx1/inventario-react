import React from "react";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { setToken, setUser } from "../../redux/ActionCreators";

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(setToken(""));
    dispatch(setUser({}));
    localStorage.setItem("token", "");
    localStorage.setItem("user", JSON.stringify({}));
    history.push("/login");
  }, []);

  return <div></div>;
};

export { Logout };

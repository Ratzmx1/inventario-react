import { createStore } from "redux";
import { Auth } from "./Auth";
const configureStore = () => {
  const store = createStore(Auth);

  return store;
};

export { configureStore };

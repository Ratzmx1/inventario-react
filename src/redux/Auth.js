import { SET_TOKEN } from "./ActionTypes";

const initialState = { token: "" };

export const Auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TOKEN:
      return { ...state, token: payload };

    default:
      return state;
  }
};

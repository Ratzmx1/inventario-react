import { SET_TOKEN } from "./ActionTypes";

export const actionName = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

import * as types from "./actionTypes";


export const userLoginRequest = () => {
  return {
    type: types.AUTH_REQUEST,
  };
};
export const userLoginSuccess = (payload) => {
  return {
    type: types.AUTH_SUCCESS,
    payload,
  };
};
export const userLoginFailure = () => {
  return {
    type: types.AUTH_FAILURE,
  };
};


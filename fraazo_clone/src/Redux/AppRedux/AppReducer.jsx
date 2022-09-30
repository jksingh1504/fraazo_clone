import * as actionTypes from "./actionTypes";

const initalState = {
  data: [],
  curousel_col:4,
  cart: JSON.parse(localStorage.getItem("frazo_cart")) || {},
  loading: false,
  error: false,
};

export const AppReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {

    case actionTypes.SET_CUROUSEL_COL:
      return {
        ...state,
        curousel_col:payload
      }
    default: {
      return state;
    }
  }
};

import * as actionTypes from "./actionTypes";

const initalState = {
  data: [],
  curousel_col: 4,
  cart: JSON.parse(localStorage.getItem("frazo_cart")) || {},
  loading: false,
  error: false,
  active_category: "exotic-fruits"
};

export const AppReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_CUROUSEL_COL:
      return {
        ...state,
        curousel_col: payload,
      };

    case actionTypes.SET_ACTIVE_CATEGORY:
      return {
        ...state,
        active_category:payload
      }
    default: {
      return state;
    }
  }
};

import * as types from "./actionTypes";

const initalState = {
  data: [],
  cart: JSON.parse(localStorage.getItem("frazo_cart")) || {},
  loading: false,
  error: false,
};

export const AppReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    default: {
      return state;
    }
  }
};

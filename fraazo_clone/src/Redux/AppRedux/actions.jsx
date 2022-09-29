import * as types from "./actionTypes";

export const getProductRequest = () => {
	return {
		type: types.GET_PRODUCT_REQUEST,
	};
};

export const getProductSuccess = (payload) => {
	return {
		type: types.GET_PRODUCT_REQUEST,
		payload,
	};
};

export const getProductFailure = () => {
	return {
		type: types.GET_PRODUCT_REQUEST,
	};
};





// export const getCart = (payload) => (dispatch) => {
// 	dispatch(getProductRequest());
// 	axios
// 		.get("http://localhost:8080/cart")
// 		.then((r) => dispatch(getCartSuccess(r.data)))
// 		.catch((e) => dispatch(getProductFailure()));
// };

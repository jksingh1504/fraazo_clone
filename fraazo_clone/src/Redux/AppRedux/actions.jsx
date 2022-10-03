import * as actionTypes from "./actionTypes";

export const getProductRequest = () => {
	return {
		type: actionTypes.GET_PRODUCT_REQUEST,
	};
};

export const getProductSuccess = (payload) => {
	return {
		type: actionTypes.GET_PRODUCT_REQUEST,
		payload,
	};
};

export const getProductFailure = () => {
	return {
		type: actionTypes.GET_PRODUCT_REQUEST,
	};
};


export const setCurouselCol=(payload)=>{
	return {type:actionTypes.SET_CUROUSEL_COL,payload}
}

export const set_active_category=(payload)=>{
 return {type:actionTypes.SET_ACTIVE_CATEGORY,payload}
}


export const getCart = (payload) => (dispatch) => {
	dispatch(getProductRequest());
	fetch("http://localhost:8080/cart")
		.then((r) => dispatch(getCart(r.data)))
		.catch((e) => dispatch(getProductFailure()));
};

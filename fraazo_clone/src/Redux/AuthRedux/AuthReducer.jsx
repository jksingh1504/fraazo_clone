import * as types from "./actionTypes";

const initalState= {
	isAuth: false,
	token: "",
	loading: false,
	error: false,
}



export const AuthReducer = (state= initalState, action) => {
	const { type, payload } = action;

	switch (type) {
		case types.AUTH_REQUEST:
			return {
				...state,
				loading: true,
			};

		case types.AUTH_SUCCESS:
			return {
				...state,
				loading: false,
				isAuth: true,
				token: payload,
				error: false,
			};

		case types.AUTH_FAILURE:
			return {
				...state,
				isAuth: false,
				token: "",
				loading: false,
				error: true,
			};

		default:
			return state;
	}
};

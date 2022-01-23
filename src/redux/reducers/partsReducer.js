import { GET_PARTS } from "../types.js";

const initialState = {
	parts: []
}

export const partsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PARTS:
			return {
				...state,
				parts: [...action.payload]
			}
		default:
			return state;
	}
}
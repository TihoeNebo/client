import * as TYPE from "./types.js";

const initialState = {
	renderedUser: null
}

export const messagerReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPE.RENDER_USER:
			return {
				...state,
				renderedUser: action.payload
			}
		default:
			return state;
	}
}
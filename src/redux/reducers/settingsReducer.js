import * as TYPE from "../types.js";

const initialState = {
	section: null
}

export const settingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPE.SHOW_SECTION:
			return {
				...state,
				section: action.payload
			}
		default:
			return state;
	}
}
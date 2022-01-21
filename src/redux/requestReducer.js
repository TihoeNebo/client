import { getReducer } from "./get.requestReducer.js";
import { putReducer } from "./put.requestReducer.js";
import { postReducer } from "./post.requestReducer.js";
import { deleteReducer } from "./delete.requestReducer.js";

const initialState = {
	url: "",
	request: {
		method: "",
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify("")
	},
	response: {
		type: ""
	}
}

export const requestReducer = (state = initialState, action) => {

	const type = action.type.split("/");
	const method = (type[0] === "REQUEST") ? type[1] : null;

	switch (method) {
		case "GET":
			return getReducer(state, action);
		case "CHANGE":
			return putReducer(state, action);
		case "CREATE":
			return postReducer(state, action);
		case "DELETE":
			return deleteReducer(state, action);
		case "CONFIRM":
			return {
				...state,
				confirmed: true
            }
		default:
			return state;
    }

	
}
import { GET_SENDERS, GET_MESSAGES, SET_RENDERED_USER, GET_NOTICES } from "./types.js";

const initialState = {
	messages: [],
	senders: [],
	notices: [],
	renderedUser: null
}

export const messagerReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SENDERS:
			return {
				...state,
				senders: [ ...action.payload ]
			}
		case GET_NOTICES:
			return {
				...state,
				notices: [ ...action.payload ]
			}
		case GET_MESSAGES:
			return {
				...state,
				messages: [ ...action.payload ]
			}
		case SET_RENDERED_USER:
			return {
				...state,
				renderedUser: action.payload
			}
		default:
			return state;
	}
}
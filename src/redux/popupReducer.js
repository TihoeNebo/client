import * as TYPE from "./types.js";

const initialState = {
	prompt: null,
	alert: null,
	redactor: null,
	profile: false,
	messager: false
}

export const popupReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPE.SHOW_PROMPT:
			return {
				...state,
				prompt: action.payload 
			}
		case TYPE.HIDE_PROMPT:
			return {
				...state,
				prompt: null 
			}
		case TYPE.SHOW_ALERT:
			return {
				...state,
				alert: action.payload
			}
		case TYPE.HIDE_ALERT:
			return {
				...state,
				alert: null
			}
		case TYPE.SHOW_REDACTOR:
			console.log(action.payload)
			return {
				...state,
				redactor: action.payload
			}
		case TYPE.HIDE_REDACTOR:
			return {
				...state,
				redactor: null
			}
		case TYPE.SHOW_PROFILE:
			return {
				...state,
				profile: true
			}
		case TYPE.HIDE_PROFILE:
			return {
				...state,
				profile: false
			}
		case TYPE.SHOW_MESSAGER:
			return {
				...state,
				messager: true
			}
		case TYPE.HIDE_MESSAGER:
			return {
				...state,
				messager: false
			}
		default:
			return state;
	}
}
import * as TYPE from "./types.js";

const initialState = {
	prompt: null,
	alert: null,
	redactor: null,
	isMessagerOpened: false,
	isLogInOpened: false,
	isRegistrationOpened: false
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
				profile: { ...action.payload }
			}
		case TYPE.HIDE_PROFILE:
			return {
				...state,
				profile: null
			}
		case TYPE.SHOW_MESSAGER:
			return {
				...state,
				isMessagerOpened: true
			}
		case TYPE.HIDE_MESSAGER:
			return {
				...state,
				isMessagerOpened: false
			}
		case TYPE.SHOW_LOGIN:
			return {
				...state,
				isLogInOpened: true
			}
		case TYPE.HIDE_LOGIN:
			return {
				...state,
				isLogInOpened: false
			}
		case TYPE.SHOW_REGISTRATION:
			return {
				...state,
				isRegistrationOpened: true
			}
		case TYPE.HIDE_REGISTRATION:
			return {
				...state,
				isRegistrationOpened: false
			}
		default:
			return state;
	}
}
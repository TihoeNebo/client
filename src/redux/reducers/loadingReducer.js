import * as TYPE from "../types.js";

const initialState = {
	parts: true,
	forum: true,
	topic: true,
	senders: true,
	messages: true,
	notices: true,
	subscribes: true,
	ignored: true,
	profile: true,
	user: true,
	mailing: true
}

export const loadingReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPE.SHOW_PARTS_LOADING:
			return {
				...state,
				parts: false
			}
		case TYPE.CLOSE_PARTS_LOADING:
			return {
				...state,
				parts: true
			}
		case TYPE.SHOW_FORUM_LOADING:
			return {
				...state,
				forum: false
			}
		case TYPE.CLOSE_FORUM_LOADING:
			return {
				...state,
				forum: true
			}
		case TYPE.SHOW_TOPIC_LOADING:
			return {
				...state,
				topic: false
			}
		case TYPE.CLOSE_TOPIC_LOADING:
			return {
				...state,
				topic: true
			}
		case TYPE.SHOW_SENDERS_LOADING:
			return {
				...state,
				senders: false
			}
		case TYPE.CLOSE_SENDERS_LOADING:
			return {
				...state,
				senders: true
			}
		case TYPE.SHOW_MESSAGES_LOADING:
			return {
				...state,
				messages: false
			}
		case TYPE.CLOSE_MESSAGES_LOADING:
			return {
				...state,
				messages: true
			}
		case TYPE.SHOW_NOTICES_LOADING:
			return {
				...state,
				notices: false
			}
		case TYPE.CLOSE_NOTICES_LOADING:
			return {
				...state,
				notices: true
			}
		case TYPE.SHOW_SUBSCRIBES_LOADING:
			return {
				...state,
				subscribes: false
			}
		case TYPE.CLOSE_SUBSCRIBES_LOADING:
			return {
				...state,
				subscribes: true
			}
		case TYPE.SHOW_IGNORED_LOADING:
			return {
				...state,
				ignored: false
			}
		case TYPE.CLOSE_IGNORED_LOADING:
			return {
				...state,
				ignored: true
			}
		case TYPE.SHOW_PROFILE_LOADING:
			return {
				...state,
				profile: false
			}
		case TYPE.CLOSE_PROFILE_LOADING:
			return {
				...state,
				profile: true
			}
		case TYPE.SHOW_USER_LOADING:
			return {
				...state,
				user: false
			}
		case TYPE.CLOSE_USER_LOADING:
			return {
				...state,
				user: true
			}
		case TYPE.SHOW_MAILING_LOADING:
			return {
				...state,
				mailing: false
			}
		case TYPE.CLOSE_MAILING_LOADING:
			return {
				...state,
				mailing: true
			}
		default:
			return state;
	}
}
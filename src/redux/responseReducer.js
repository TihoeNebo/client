import * as TYPE from "./types.js";

const initialState = {
	parts: [],
	forum: null,
	topic: null,
	profile: null,
	notices: [],
	messager: {
		messages: [],
		senders: [],
		subscribes: []
	},
	user: {
		account: {
			id: null,
			level: 0,
			mail: null,
			isMailConfurmed: false,
			isBanned: false,
			banPeriod: null
		},
		person: {
			name: "Гость",
			gender: 2,
			birthday: null,
			registered: null,
		},
		statistic: {
			newNoticesCount: 3,
			newMessagesCount: 11
		}
	}
}

export const responseReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPE.SET_PARTS:
			return {
				...state,
				parts: [...action.payload]
			}
		case TYPE.SET_FORUM:
			return {
				...state,
				forum: {...action.payload}
			}
		case TYPE.SET_TOPIC:
			return {
				...state,
				topic: {...action.payload}
			}
		case TYPE.SET_SENDERS:
			return {
				...state,
				messager: {
					...state.messager,
					senders: [...action.payload]
				}
			}
		case TYPE.SET_MESSAGES:
			return {
				...state,
				messager: {
					...state.messager,
					messages: [...action.payload]
				}
			}
		case TYPE.SET_NOTICES:
			return {
				...state,
					notices: [...action.payload]
			}
		case TYPE.SET_PROFILE:
			return {
				...state,
				profile: { ...action.payload }
			}
		case TYPE.SET_USER_DATA:
			return {
				...state,
				user: { ...action.payload }
			}
		case TYPE.SET_GUEST_DATA:
			return {
				...state,
				user: initialState.user
            }
		case TYPE.SET_SUBSCRIBES:
			return {
				...state,
				messager: {
					...state.messager,
					subscribes: [...action.payload]
				}
			}
		default:
			return state;
	}
}
import { SET_USER_DATA } from "./types.js";

const initialState = {
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

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				 ...action.payload 
			}
		default:
			return state;
	}
}
import * as TYPE from "./types.js";

const initialState = {
	url: "",
	request: {
		method: "PUT",
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify("")
	},
	response: {
		type: ""
	}
}

export const putReducer = (state = initialState, action) => {

	switch (action.type) {
		case TYPE.CHANGE_PART:
			return {
				url: "/parts",
				request: {
					method: "PUT",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(action.payload)
				},
				response: {
					type: TYPE.SET_PARTS
				}
			}
		case TYPE.CHANGE_FORUM:
			return {
				url: `/forum`,
				request: {
					method: "PUT",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(action.payload)
				},
				response: {
					type: TYPE.SET_PARTS
				}
			}
		case TYPE.CHANGE_TOPIC:
			return {
				url: `/topic`,
				request: {
					method: "PUT",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(action.payload)
				},
				response: {
					type: TYPE.SET_FORUM
				}
			}
		case TYPE.CHANGE_POST:
			return {
				url: "/post",
				request: {
					method: "PUT",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(action.payload)
				},
				response: {
					type: TYPE.SET_TOPIC
				}
			}
		case TYPE.CHANGE_NOTICES:
			return {
				url: `/messager/notices`,
				request: {
					method: "PUT",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(action.payload)
				},
				response: {
					type: TYPE.SET_MESSAGES
				}
			}
		case TYPE.CHANGE_USER_DATA:
			return {
				url: `/user`,
				request: {
					method: "PUT",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(action.payload)
				},
				response: {
					type: TYPE.SET_USER_DATA
				}
			}
		default:
			return state;
	}
}
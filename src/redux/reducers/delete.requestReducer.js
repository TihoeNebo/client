import * as TYPE from "../types.js";

const initialState = {
	url: "",
	request: {
		method: "DELETE",
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify("")
	},
	response: {
		type: ""
	}
}

export const deleteReducer = (state = initialState, action) => {

	switch (action.type) {
		case TYPE.DELETE_FORUM:
			return {
				url: `/forum`,
				request: {
					method: "DELETE",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(action.payload)
				},
				response: {
					type: TYPE.SET_PARTS
				}
			}
		case TYPE.DELETE_TOPIC:
			return {
				url: `/topic`,
				request: {
					method: "DELETE",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(action.payload)
				},
				response: {
					type: TYPE.SET_FORUM
				}
			}
		case TYPE.DELETE_POST:
			return {
				url: "/post",
				request: {
					method: "DELETE",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(action.payload)
				},
				response: {
					type: TYPE.SET_TOPIC
				}
			}
		case TYPE.DELETE_SUBSCRIBE:
			return {
				url: `/messager/subscribes`,
				request: {
					method: "DELETE",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(action.payload)
				},
				response: {
					type: TYPE.SET_SUBSCRIBES
				}
			}
		case TYPE.DELETE_IGNORED:
			return {
				url: `/messager/ignored`,
				request: {
					method: "DELETE",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(action.payload)
				},
				response: {
					type: TYPE.SET_IGNORED
				}
			}
		case TYPE.DELETE_ACCOUNT:
			return {
				url: `/user`,
				request: {
					method: "DELETE",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(action.payload)
				},
				response: {
					type: TYPE.SHOW_ALERT,
					payload: "Аккаунт успешно удален."
				}
			}
		default:
			return state;
	}
}
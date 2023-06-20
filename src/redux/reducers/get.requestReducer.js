import * as TYPE from "../types.js";

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

export const getReducer = (state = initialState, action) => {

	switch (action.type) {
		case TYPE.GET_PARTS:
			return {
				url: "/parts",
				request: {
					method: "GET"
				},
				response: {
					type: TYPE.SET_PARTS
				}
			}
		case TYPE.GET_FORUM:
			return {
				url: `/forum?urn=${action.payload.forumURN}`,
				request: {
					method: "GET"
				},
				response: {
					type: TYPE.SET_FORUM
				}
			}
		case TYPE.GET_TOPIC:
			return {
				url: `/topic?urn=${action.payload.forumURN}&topicId=${action.payload.topicId}`,
				request: {
					method: "GET"
				},
				response: {
					type: TYPE.SET_TOPIC
				}
			}
		case TYPE.GET_SENDERS:
			return {
				url: "/messager/senders",
				request: {
					method: "GET"
				},
				response: {
					type: TYPE.SET_SENDERS
				}
			}
		case TYPE.GET_MESSAGES:
			return {
				url: `/messager/messages?from=${action.payload.from}`,
				request: {
					method: "GET"
				},
				response: {
					type: TYPE.SET_MESSAGES
				}
			}
		case TYPE.GET_NOTICES:

			return {
				url: "/messager/notices",
				request: {
					method: "GET"
				},
				response: {
					type: TYPE.SET_NOTICES
				}
			}
		case TYPE.GET_SUBSCRIBES:
			return {
				url: "/messager/subscribes",
				request: {
					method: "GET"
				},
				response: {
					type: TYPE.SET_SUBSCRIBES
				}
			}
		case TYPE.GET_IGNORED:
			return {
				url: "/messager/ignored",
				request: {
					method: "GET"
				},
				response: {
					type: TYPE.SET_IGNORED
				}
			}
		case TYPE.GET_PROFILE:
			return {
				url: `/profile?id=${action.payload.id}`,
				request: {
					method: "GET"
				},
				response: {
					type: TYPE.SET_PROFILE
				}
			}
		case TYPE.CONFIRM_MAIL:
			return {
				url: "/messager/mailing?confirm=1",
				request: {
					method: "GET"
				},
				response: {
					type: TYPE.SHOW_ALERT,
					payload: "������ ���� ����������."
				}
			}
		case TYPE.GET_MAILING:
			return {
				url: "/messager/mailing",
				request: {
					method: "GET"
				},
				response: {
					type: TYPE.SET_MAILING
				}
			}
		default:
			return state;
	}
}
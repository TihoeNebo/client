import * as TYPE from "../types.js";

const initialState = {
	url: "",
	request: {
		method: "POST",
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify("")
	},
	response: {
		type: ""
	}
}

export const postReducer = (state = initialState, action) => {

	switch (action.type) {
		case TYPE.CREATE_PART:
			return {
				url: "/parts",
				request: {
					method: "POST",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(action.payload)
				},
				response: {
					type: TYPE.SET_PARTS
				}
			}
		case TYPE.CREATE_FORUM:
			return {
				url: `/forum`,
				request: {
					method: "POST",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(action.payload)
				},
				response: {
					type: TYPE.SET_PARTS
				}
			}
		case TYPE.CREATE_TOPIC:
			return {
				url: `/topic`,
				request: {
					method: "POST",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(action.payload)
				},
				response: {
					type: TYPE.SET_FORUM
				}
			}
		case TYPE.CREATE_POST:
			return {
				url: "/post",
				request: {
					method: "POST",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(action.payload)
				},
				response: {
					type: TYPE.SET_TOPIC
				}
			}
		case TYPE.CREATE_MESSAGE:
			return {
				url: `/messager/messages`,
				request: {
					method: "POST",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(action.payload)
				},
				response: {
					type: TYPE.SET_MESSAGES
				}
			}
		case TYPE.CREATE_SUBSCRIBE:
			return {
				url: `/messager/subscribes`,
				request: {
					method: "POST",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(action.payload)
				},
				response: {
					type: TYPE.SET_SUBSCRIBES
				}
			}
		case TYPE.CREATE_IGNORED:
			return {
				url: `/messager/ignored`,
				request: {
					method: "POST",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(action.payload)
				},
				response: {
					type: TYPE.SET_IGNORED
				}
			}
		case TYPE.CREATE_USER_DATA:
			return {
				url: `/user`,
				request: {
					method: "POST",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(action.payload)
				},
				response: {
					type: TYPE.SHOW_ALERT,
					payload: `��� ���� ���������� ������ � ������� ��� ������������� ���������� ������ e-mail.
								����������, ��������� ����� � �������� �� ������ ��� ���������� �����������.`
				}
			}
		case TYPE.CREATE_USER_AUTHENTICATION:
			return {
				url: `/user`,
				request: {
					method: "POST",
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
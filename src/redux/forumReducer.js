import { GET_FORUM, DELETE_TOPIC, RETURN_TOPIC } from "./types.js";

const initialState = {
	forum: null,
	topics: []
}

export const forumReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FORUM:
			return {
				...state,
				forum: { ...action.payload }
			}
		case DELETE_TOPIC:
			return {
				...state,
				topics: [...state.topics, action.payload]
			}
		case RETURN_TOPIC:
			const index = state.topics.findIndex(topic =>
				topic.id == action.payload.id && topic.forumURN == action.payload.forumURN);
			if (!(index + 1)) return;
			const topics = [...state.topics];
			topics.splice(index, 1);
			return { ...state, topics };
		default:
			return state;
	}
}
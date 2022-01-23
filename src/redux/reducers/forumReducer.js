import * as TYPE from "../types.js";

const initialState = {
	deletedTopics: []
}

export const forumReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPE.ADD_DELETED_TOPIC:
			return {
				...state,
				deletedTopics: [...state.deletedTopics, action.payload]
			}
		case TYPE.RETURN_TOPIC:
			const index = state.deletedTopics.findIndex(topic =>
				topic.id == action.payload.id && topic.forumURN == action.payload.forumURN);
			if (!(index + 1)) return;
			const deletedTopics = [...state.deletedTopics];
			deletedTopics.splice(index, 1);
			return { ...state, deletedTopics };
		default:
			return state;
	}
}
import { GET_TOPIC, DELETE_POST, RETURN_POST} from "./types.js";

const initialState = {
	topic: {},
	posts:[]
}

export const topicReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TOPIC:
			return {
				...state,
				topic: { ...action.payload }
			}
		case DELETE_POST:
			return {
				...state,
				posts: [...state.posts, action.payload]
			}
		case RETURN_POST:
			const index = state.posts.findIndex(post =>
				post.topicId == action.payload.topicId &&
				post.forumURN == action.payload.forumURN &&
				post.id == action.payload.id);
			if (!(index + 1)) return;
			const posts = [...state.posts];
			posts.splice(index, 1);
			return { ...state, posts };
		default:
			return state;
	}
}
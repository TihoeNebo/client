import * as TYPE from "../types.js";

const initialState = {
	deletedPosts:[]
}

export const topicReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPE.ADD_DELETED_POST:
			return {
				...state,
				deletedPosts: [...state.posts, action.payload]
			}
		case TYPE.RETURN_POST:
			const index = state.deletedPosts.findIndex(post =>
				post.topicId == action.payload.topicId &&
				post.forumURN == action.payload.forumURN &&
				post.id == action.payload.id);
			if (!(index + 1)) return;
			const deletedPosts = [...state.deletedPosts];
			deletedPosts.splice(index, 1);
			return { ...state, deletedPosts };
		default:
			return state;
	}
}
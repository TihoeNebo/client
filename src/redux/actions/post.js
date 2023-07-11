import * as TYPE from "../types.js";

export const writePostContent = (post) => {
    return {
        type: TYPE.WRITE_POST_CONTENT,
        payload: post
    }
}

export const createPost = (forumURN, topicId) => {
    return (state) => {
        return {
            type: TYPE.CREATE_POST,
            payload: {
                post: {
                    ...state.post, forumURN, topicId
                }
        }
        }
        
    }
}

export const redactPost = (forumURN, topicId, id) => {
    return (state) => {
        return {
            type: TYPE.CHANGE_POST,
            payload: {
                post: {
                    ...state.post,
                    forumURN, 
                    topicId, 
                    id
                }
            }
        }
        
    }
}

export const deletePost = (forumURN, topicId, id) => {
    return dispatch => {
        dispatch({
            type: TYPE.DELETE_POST,
            payload: {
                forumURN, topicId, id
            }
        });
        dispatch({
            type: TYPE.ADD_DELETED_POST,
            payload: {
                forumURN, topicId, id
            }
        });
    }
}

export const returnPost = (forumURN, topicId, id) => {
    return dispatch => {
        dispatch({
            type: TYPE.DELETE_POST,
            payload: {
                forumURN, topicId, id
            }
        });
        dispatch({
            type: TYPE.RETURN_POST,
            payload: {
                forumURN, topicId, id
            }
        });
    }
}

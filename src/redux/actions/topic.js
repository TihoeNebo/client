import * as TYPE from "../types.js";

export const writeTopicTitle = (title) => {
    return {
        type: TYPE.WRITE_TOPIC_TITLE,
        payload: title
    }
}

export const writeTopicComment = (comment) => {
    return {
        type: TYPE.WRITE_TOPIC_COMMENT,
        payload: comment
    }
}

export const deleteTopic = (forumURN, id) => {
    return dispatch => {
        dispatch({
            type: TYPE.DELETE_TOPIC,
            payload: {
                forumURN, id
            }
        });
        dispatch({
            type: TYPE.ADD_DELETED_TOPIC,
            payload: {
                forumURN, id
            }
        });
    }
}

export const replaceTopic = (urn) => {
    return (state) => {
        return {
            type: TYPE.CHANGE_TOPIC,
            payload: {
                forum: { 
                    urn
                 }
            }
        }
        
    }
}

export const createTopic = (forumURN) => {
    return (state) => {
        return {
            type: TYPE.CREATE_TOPIC,
            payload: {
                topic: {
                    ...state.topic,
                    forumURN
                }
            }
        }
        
    }
}



export const returnTopic = (forumURN, id) => {
    return async dispatch => {
        await dispatch({
            type: TYPE.DELETE_TOPIC,
            payload: { forumURN, id }
        });
        dispatch({
            type: TYPE.RETURN_TOPIC,
            payload: { forumURN, id }
        });
    }
}

export const renameTopic = (forumURN, id) => {
    return (state) => {
        return {
            type: TYPE.CHANGE_TOPIC,
            payload: {
                topic: {
                    ...state.topic,
                    forumURN, id
                }
            }
        }
    }
}

export const closeTopic = (forumURN, id) => {
    return {
        type: TYPE.CHANGE_TOPIC,
        payload: {
            topic: {
                forumURN, id,
                closed: true
            }
        }
    }
}

export const openTopic = (forumURN, id) => {
    return {
        type: TYPE.CHANGE_TOPIC,
        payload: {
            topic: {
                forumURN, id,
                closed: false
            }
        }
    }
}

export const getTopic = (forumURN, topicId) => {
    return {
        type: TYPE.GET_TOPIC,
        payload: {
            forumURN, topicId
        }
    }
}

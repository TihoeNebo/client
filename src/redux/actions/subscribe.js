import * as TYPE from "../types.js";

export const getSubscribes = () => {

    return {
        type: TYPE.GET_SUBSCRIBES
    }
}

export const deleteSubscribe = (forumURN, id) => {

    return {
        type: TYPE.DELETE_SUBSCRIBE,
        payload: { forumURN, id }
    }
}

export const createSubscribe = (forumURN, id) => {

    return {
        type: TYPE.CREATE_SUBSCRIBE,
        payload: { forumURN, id }
    }
}
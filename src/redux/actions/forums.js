import * as TYPE from "../types.js";

export const writeForumTitle = (title) => {
    return {
        type: TYPE.WRITE_FORUM_TITLE,
        payload: title
    }
}

export const writePartId = (partId) => {
    return {
        type: TYPE.WRITE_FORUM_PARTID,
        payload: partId
    }
}

export const createForum = (partId) => {
    return (state) => {
        return {
            type: TYPE.CREATE_FORUM,
            payload:  {
                ...state.forum,
                partId
            }
        }
    }
}
export const deleteForum = (urn) => {
    return {
        type: TYPE.DELETE_FORUM,
        payload: { urn }
    }
}

export const replaceForum = (urn) => {
    return (state) => {
        return {
            type: TYPE.CHANGE_FORUM,
            payload: {
                forum: { 
                    urn,
                    partId: state.forum.partId
                 }
            }
        }
        
    }
}

export const getForum = (forumURN) => {
    return {
        type: TYPE.GET_FORUM,
        payload: { forumURN }
    }
}

export const renameForum = (urn) => {
    return (state) => {
        return {
            type: TYPE.CHANGE_FORUM,
            payload: {
                forum: {
                    urn,
                    title: state.forum.title
                }
            }
    }
    }
}

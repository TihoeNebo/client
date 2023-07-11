import * as TYPE from "../types.js";



export const getNotices = () => {

    return {
        type: TYPE.GET_NOTICES
    }
}

export const openSection = (section) => {

    return {
        type: TYPE.SHOW_SECTION,
        payload: section
    }
}

export const changeMailingSettings = (data) => {

    return {
        type: TYPE.CHANGE_MESSAGER_SETTINGS,
        payload: data
    }
}

export const getMailingSettings = () => {

    return {
        type: TYPE.GET_MAILING
    }
}

export const getIgnored = () => {

    return {
        type: TYPE.GET_IGNORED
    }
}

export const deleteIgnored = (id) => {

    return {
        type: TYPE.DELETE_IGNORED,
        payload: { id }
    }
}

export const createIgnored = (id) => {

    return {
        type: TYPE.CREATE_IGNORED,
        payload: { id }
    }
}
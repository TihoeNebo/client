import * as TYPE from "../types.js";

export const writeTitle = (title) => {
    return {
        type: TYPE.WRITE_PART_TITLE,
        payload: title
    }
}

export const createPart = (state) => {
    return {
        type: TYPE.CREATE_PART,
        payload: state.part
    }
}

export const getParts = () => {
    return {
        type: TYPE.GET_PARTS
    }
}

export const changePartName = (partId) => {
    return (state) => {
        return {
            type: TYPE.CHANGE_PART,
            payload:  {
                ...state.part,
                id: partId
            }
        }
    }
}
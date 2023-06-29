import * as TYPE from "../types.js";

const initialState = {
    user: {
        account: {
            mail: null,
            pass: null,
            newPass: null,
            repeatPass: null
        },
        person: {
            name: null
        }
    },
    part: {
        id: null,
        title: null
    },
    forum: {
        partId: null,
        urn: null,
        title: null
    }
}

const primaryState = new Object(initialState);

export const redactorReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.WRITE_MAIL:
            return {
                ...state,
                user: {
                    ...state.user,
                    account: {
                        ...state.account,
                        mail: action.payload}
                }
            };
        case TYPE.WRITE_PASS:
            return {
                ...state,
                user: {
                    ...state.user,
                    account: {
                        ...state.account,
                        pass: action.payload}
                }
            };
        case TYPE.WRITE_NEW_PASS:
            return {
                ...state,
                user: {
                    ...state.user,
                    account: {
                        ...state.account,
                        newPass: action.payload}
                }
            };
        case TYPE.WRITE_NAME:
            return {
                ...state,    
                user: {
                    ...state.user,
                    person: {
                        ...state.person,
                        name: action.payload}
                }   
            };
        case TYPE.REPEAT_PASS:
            return {    
                ...state,    
                user: {
                    ...state.user,
                    account: {
                        ...state.account,
                        repeatPass: action.payload}
                }   
            };
        case TYPE.WRITE_PART_TITLE:
            return {
                ...state,
                part: {
                    ...state.part,
                    title:  action.payload
                }
            };
        case TYPE.WRITE_FORUM_TITLE:
            return {
                ...state,
                forum: {
                    ...state.forum,
                    title: action.payload
                }
            };
        case TYPE.WRITE_FORUM_PARTID:
            return {
                ...state,
                forum: {
                    ...state.forum,
                    partId: action.payload
                }
            };  
        case TYPE.CLEAR_REDACTOR:
            return primaryState;   
        default:
            return state;
    }
}
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
    },
    topic: {
        id: null,
        title: null,
        comment: null,
        forumURN: null
    },
    post: {
        id: null,
        forumURN: null,
        topicId: null,
        content: null
    },
    message: {
        content: null
    },
    ban: {
        time: null
    }
}

const primaryState = {...initialState};

export const redactorReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case TYPE.WRITE_MAIL:
            return {
                ...state,
                user: {
                    ...state.user,
                    account: {
                        ...state.user.account,
                        mail: action.payload
                    }
                }
            };
        case TYPE.WRITE_PASS:
            return {
                ...state,
                user: {
                    ...state.user,
                    account: {
                        ...state.user.account,
                        pass: action.payload
                    }
                }
            }; 
        case TYPE.WRITE_NEW_PASS:
            return {
                ...state,
                user: {
                    ...state.user,
                    account: {
                        ...state.user.account,
                        newPass: action.payload
                    }
                }
            };
        case TYPE.WRITE_NAME:
            return {
                ...state,
                user: {
                    ...state.user,
                    person: {
                        ...state.user.person,
                        name: action.payload
                    }
                }
            };
        case TYPE.REPEAT_PASS:
            return {
                ...state,
                user: {
                    ...state.user,
                    account: {
                        ...state.user.account,
                        repeatPass: action.payload
                    }
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
                    title:  action.payload
                }
            };
        case TYPE.WRITE_FORUM_PARTID:
            return {
                ...state,
                forum: {
                    ...state.forum,
                    partId:  action.payload
                }
            };
        case TYPE.WRITE_TOPIC_TITLE:
            return {
                ...state,
                topic: {
                    ...state.topic,
                    title: action.payload
                }
            };
        case TYPE.WRITE_TOPIC_COMMENT:
            return {
                ...state,
                topic: {
                    ...state.topic,
                    comment: action.payload
                }
            };
        case TYPE.WRITE_POST_CONTENT:
            return {
                ...state,
                post: {
                    ...state.post,
                    content: action.payload
                }
            };
        case TYPE.WRITE_MESSAGE:
            return {
                ...state,
                message: {
                    ...state.message,
                    content: action.payload
                }
            }; 
        case TYPE.WRITE_BANTIME:
            return {
                    ...state,
                    ban: {
                        ...state.ban,
                        time: action.payload
                    }
                }   
        case TYPE.CLEAR_REDACTOR:
            return primaryState;   
        default:
            return state;
    }
}
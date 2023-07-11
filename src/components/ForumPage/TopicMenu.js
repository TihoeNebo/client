import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ToggleButton from "../Redactor/ToggleButton";
import Redactor from "../Redactor/Redactor.js";
import InputString from "../Redactor/InputString.js";
import * as action from "../../redux/actions/topic.js";

export default function TopicMenu({ topic }) {

    const user = useSelector(state => state.data.user.account);
    const dispatch = useDispatch();
    
    const deletionHandler = () => {
        dispatch( action.deleteTopic(topic.forumURN, topic.id));
    }

    return (
        <>
            {
                user.level > 2 ?
                    <div className="topic_menu">
                        <ToggleButton allowedLevel="3" title="Переименовать тему">
                            <Redactor action={action.renameTopic(topic.forumURN, topic.id)}>
                                <InputString action={action.writeTopicTitle} />
                                <InputString action={action.writeTopicComment} />
                            </Redactor>
                        </ToggleButton>
                        <button onClick={deletionHandler}>Удалить тему</button>
                        { topic.params.closed ?
                            <button onClick={() => dispatch(action.openTopic(topic.forumURN, topic.id)) }>Открыть тему</button> :
                            <button onClick={() => dispatch(action.closeTopic(topic.forumURN, topic.id)) }>Закрыть тему</button>
                        }
                    </div>
                    : null
            }
        </>
    )
}

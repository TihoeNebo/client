import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ToggleButton from "../Redactor/ToggleButton";
import Redactor from "../Redactor/Redactor.js";
import TopicRedactor from "../Redactor/Topic.redactorElements.js";
import { closeTopic, deleteTopic, openTopic, renameTopic } from "../../redux/actions.js";

export default function TopicMenu({ topic }) {

    const user = useSelector(state => state.data.user.account);
    const dispatch = useDispatch();
    
    const deletionHandler = () => {
        dispatch( deleteTopic(topic.forumURN, topic.id));
    }

    return (
        <>
            {
                user.level > 2 ?
                    <div className="topic_menu">
                        <ToggleButton allowedLevel="3" title="Переименовать тему">
                            <Redactor action={renameTopic(topic.forumURN, topic.id)}>
                                <TopicRedactor topic={ topic.theme, topic.comment } />
                            </Redactor>
                        </ToggleButton>
                        <button onClick={deletionHandler}>Удалить тему</button>
                        { topic.params.closed ?
                            <button onClick={() => dispatch(openTopic(topic.forumURN, topic.id)) }>Открыть тему</button> :
                            <button onClick={() => dispatch(closeTopic(topic.forumURN, topic.id)) }>Закрыть тему</button>
                        }
                    </div>
                    : null
            }
        </>
    )
}

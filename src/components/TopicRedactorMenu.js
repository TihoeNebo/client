import React from "react";
import { connect } from "react-redux";
import ToggleButton from "./ToggleButton";
import Redactor from "./Redactor.js";
import TopicRedactor from "./Topic.redactorElements.js";
import { useUserContext } from './UserContext';
import { getForum, sendMessage, deleteTopic } from "../redux/actions.js";

function TopicRedactorMenu({ topic, sendMessage, deleteTopic }) {

    const [{ user }] = useUserContext();
    
    const renameTopicData = {
        type: "renameTopic",
        topic: {
            forumURN: topic.forumURN,
            id: topic.id,
            theme: topic.theme,
            comment: topic.comment

        }
    };
    const deleteTopicData = {
        forumURN: topic.forumURN,
        id: topic.id
    };
    const closeTopicData = {
        type: "closeTopic",
        topic: {
            forumURN: topic.forumURN,
            id: topic.id

        }
    };

  

    const deletionHandler = () => {
        deleteTopic(deleteTopicData);
    }
    const closingHandler = () => {
        sendMessage(closeTopicData);
    }

    return (
        <>
            {
                user.level > 2 ?
                    <div className="topic_menu">
                        <ToggleButton allowedLevel="3" title="Переименовать тему">
                            <Redactor data={renameTopicData} launchReloading={getForum(topic.forumURN)}>
                                <TopicRedactor />
                            </Redactor>
                        </ToggleButton>
                        <button onClick={deletionHandler}>Удалить тему</button>
                        <button onClick={closingHandler}>Закрыть тему</button>
                    </div>
                    : null
            }
        </>
    )
}

const mapDispatchToProps = {
    sendMessage, deleteTopic
};

export default connect(null, mapDispatchToProps)(TopicRedactorMenu)

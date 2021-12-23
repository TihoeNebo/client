import React from "react";
import ToggleButton from "./ToggleButton";
import Redactor from "./Redactor.js";
import TopicRedactor from "./Topic.redactorElements.js";
import { useUserContext } from './UserContext';

export default function TopicRedactorMenu({ topic, reloadingLauncher, setDeleted }) {

    const [{ user }] = useUserContext();
    console.dir(user)
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
        type: "deleteTopic",
        topic: {
            forumURN: topic.forumURN,
            id: topic.id

        }
    };
    const closeTopicData = {
        type: "closeTopic",
        topic: {
            forumURN: topic.forumURN,
            id: topic.id

        }
    };

  

    const deletionHandler = () => {
        setDeleted(true);
        sendMessage(deleteTopicData);
    }
    const closingHandler = () => {
        sendMessage(closeTopicData);
    }

    return (
        <>
            {
                user.level > 2 ?
                    <div className="topic_menu">
                        <ToggleButton
                            allowedLevel="3"
                            title="Переименовать тему"
                            reloadingLauncher={reloadingLauncher}
                        >
                            <Redactor data={renameTopicData}>
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

function sendMessage(data) {
    return console.log(data);
}

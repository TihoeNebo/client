import React from 'react';
import ToggleButton from "./ToggleButton";
import Redactor from "./Redactor.js";
import ForumRedactor from "./Forum.redactorElements.js";
import TopicRedactor from "./Topic.redactorElements.js";
import PostRedactor from "./Post.redactorElements.js";
import PartSetTitle from "./PartSetTitle.redactorElements.js";
import { useUserContext } from './UserContext';

export default function PartRedactorMenu({ part, reloadingLauncher }) {

    const changePartNameData = {
        type: "changePartName",
        part: part
    };
    const createForumData = {
        type: "createForum",
        forum: {
            partId: part.id
        }
    };

    const [userData] = useUserContext();
    if (userData.user.level < 4) return null;

    return (
        <div className="menu">
            <ToggleButton
                allowedLevel="4"
                title="Переименовать раздел"
                reloadingLauncher={reloadingLauncher}
            >
                <Redactor dataObject={changePartNameData}>
                    <PartSetTitle />
                </Redactor>
            </ToggleButton>
            <ToggleButton
                allowedLevel="4"
                title="Создать форум"
                reloadingLauncher={reloadingLauncher}
            >
                <Redactor dataObject={createForumData}>
                    <h3>Новый форум: </h3>
                    <ForumRedactor />
                    <h4>Первая тема:</h4>
                    <TopicRedactor />
                    <h4>Первое сообщение в теме:</h4>
                    <PostRedactor />
                </Redactor>
            </ToggleButton>
        </div>    
    )
}
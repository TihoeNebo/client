import React from "react";
import ToggleButton from "./ToggleButton";
import ForumRedactor from "./Forum.redactorElements.js";
import TopicRedactor from "./Topic.redactorElements.js";
import PostRedactor from "./Post.redactorElements.js";
import PartSetTitle from "./PartSetTitle.redactorElements.js";
import Redactor from "./Redactor.js";

export default function CreatePartButton({ reloadingLauncher }) {
    return (
        <ToggleButton
            allowedLevel="4"
            title="Создать раздел"
            reloadingLauncher={reloadingLauncher}
        >
            <Redactor dataObject={{type: "CreatePart"}}>
                <h3>Новый раздел: </h3>
                <PartSetTitle />
                <h4>Первый форум: </h4>
                <ForumRedactor />
                <h4>Первая тема:</h4>
                <TopicRedactor />
                <h4>Первое сообщение в теме:</h4>
                <PostRedactor />
            </Redactor>
        </ToggleButton>
        )
}
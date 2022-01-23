import React from "react";
import ToggleButton from "../Redactor/ToggleButton";
import ForumRedactor from "../Redactor/Forum.redactorElements.js";
import TopicRedactor from "../Redactor/Topic.redactorElements.js";
import PostRedactor from "../Redactor/Post.redactorElements.js";
import PartSetTitle from "../Redactor/PartSetTitle.redactorElements.js";
import Redactor from "../Redactor/Redactor.js";
import { createPart } from "../../redux/actions.js";

export default function CreatePartButton( ) {
    return (
        <ToggleButton allowedLevel="4" title="Создать раздел">
            <Redactor action={createPart()} >
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
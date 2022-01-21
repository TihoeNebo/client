import React from 'react';
import { useSelector } from 'react-redux';
import ToggleButton from "./ToggleButton";
import Redactor from "./Redactor.js";
import ForumRedactor from "./Forum.redactorElements.js";
import TopicRedactor from "./Topic.redactorElements.js";
import PostRedactor from "./Post.redactorElements.js";
import PartSetTitle from "./PartSetTitle.redactorElements.js";
import { changePartName, createForum } from "../redux/actions.js";

export default function PartMenu({ part }) {

    const user = useSelector(state => state.data.user.account);
    if (user.level < 4) return null;

    return (
        <div className="menu">
            <ToggleButton
                allowedLevel="4"
                title="Переименовать раздел"
            >
                <Redactor action={changePartName(part.id)} >
                    <PartSetTitle thisTitle={ part.name } />
                </Redactor>
            </ToggleButton>
            <ToggleButton
                allowedLevel="4"
                title="Создать форум"
            >
                <Redactor action={createForum(part.id)} >
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
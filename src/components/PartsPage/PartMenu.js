import React from 'react';
import { useSelector } from 'react-redux';
import ToggleButton from "../Redactor/ToggleButton";
import Redactor from "../Redactor/Redactor.js";
import InputString from "../Redactor/InputString.js";
import { changePartName, writeTitle } from "../../redux/actions/parts.js";
import { createForum, writeForumTitle } from "../../redux/actions/forums.js";

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
                    <InputString action={writeTitle} />
                </Redactor>
            </ToggleButton>
            <ToggleButton
                allowedLevel="4"
                title="Создать форум"
            >
                <Redactor action={createForum(part.id)} >
                    <h3>Новый форум: </h3>
                    <InputString action={writeForumTitle}  />
                </Redactor>
            </ToggleButton>
        </div>    
    )
}
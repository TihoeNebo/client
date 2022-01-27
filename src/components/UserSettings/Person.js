import React from "react";
import { useSelector } from "react-redux";
import Redactor from "../Redactor/Redactor.js";
import Name from "../Redactor/Name.redactorElements.js";
import { changeUserData } from "../../redux/actions.js";


export default function Person() {

    const isOpened = (useSelector(state => state.settings.section) === "PERSON");
    const person = useSelector(state => state.data.user.person);

    if (!isOpened) return null;

    return (
        <>
            <h4>Анкетные данные.</h4>
            <div>
                <strong>Изменить имя:</strong>
                <Redactor action={changeUserData()} buttonTitle="Изменить">
                    <Name name={person.name} />
                </Redactor>
            </div>
        </>
    )
}
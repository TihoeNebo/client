import React from "react";
import { useSelector } from "react-redux";
import Redactor from "../Redactor/Redactor.js";
import InputString from "../Redactor/InputString.js";
import * as action from "../../redux/actions/user.js";


export default function Person() {

    const isOpened = (useSelector(state => state.settings.section) === "PERSON");
    const person = useSelector(state => state.redactor.user.person);

    if (!isOpened) return null;

    return (
        <>
            <h4>Анкетные данные.</h4>
            <div>
                <strong>Изменить имя:</strong>
                <Redactor action={action.changeUserData(person)} buttonTitle="Изменить">
                    <InputString action={action.writeName} inputName={"name"} />
                </Redactor>
            </div>
        </>
    )
}
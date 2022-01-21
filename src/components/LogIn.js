import React from "react";
import ToggleButton from "./ToggleButton.js";
import Redactor from "./Redactor.js";
import Mail from "./Mail.redactorElements.js";
import Pass from "./Pass.redactorElements.js";
import { logIn } from '../redux/actions.js';

export default function LogIn( ) {

    return (
        <ToggleButton allowedLevel={0} title="Войти">
            <Redactor action={logIn()} buttonTitle="Войти">
                e-mail: <Mail />
                пароль: <Pass />
            </Redactor>
        </ToggleButton>
    )
}

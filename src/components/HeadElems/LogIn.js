import React from "react";
import ToggleButton from "../Redactor/ToggleButton.js";
import Redactor from "../Redactor/Redactor.js";
import Mail from "../Redactor/Mail.redactorElements.js";
import Pass from "../Redactor/Pass.redactorElements.js";
import { logIn } from '../../redux/actions.js';

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

import React from "react";
import ToggleButton from "../Redactor/ToggleButton.js";
import Redactor from "../Redactor/Redactor.js";
import ConfirmPass from "../Redactor/ConfirmPass.redactorElements.js";
import Pass from "../Redactor/Pass.redactorElements.js";
import Mail from "../Redactor/Mail.redactorElements.js";
import Name from "../Redactor/Name.redactorElements.js";
import { createUser } from "../../redux/actions.js";

export default function RegistrationForm() {

    return (
        <ToggleButton allowedLevel={0} title="Регистрация" >
            <Redactor action={createUser()} buttonTitle="Зарегистрироваться" >
                <strong>Регистрация</strong><br />
                e-mail: <Mail /><br />
                Имя на сайте: <Name /><br />
                пароль: <Pass /><br />
                повторите пароль: <ConfirmPass />
            </Redactor>
        </ToggleButton>
        )
}


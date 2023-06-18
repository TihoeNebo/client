import React from "react";
import ToggleButton from "../Redactor/ToggleButton.js";
import Redactor from "../Redactor/Redactor.js";
import ConfirmPass from "../Redactor/ConfirmPass.redactorElements.js";
import Pass from "../Redactor/Pass.redactorElements.js";
import Mail from "../Redactor/Mail.redactorElements.js";
import Name from "../Redactor/Name.redactorElements.js";
import { createUser } from "../../redux/actions.js";
import styles from "./header.module.scss";

export default function RegistrationForm() {

    return (
        <ToggleButton style={styles.main_button} allowedLevel={0} title="регистрация" >
            <Redactor action={createUser()} buttonTitle="Зарегистрироваться" >
                <h2>Регистрация</h2>
                e-mail: <Mail /><br />
                Имя на сайте: <Name /><br />
                пароль: <Pass newPass={true} /><br />
                повторите пароль: <ConfirmPass />
            </Redactor>
        </ToggleButton>
        )
}


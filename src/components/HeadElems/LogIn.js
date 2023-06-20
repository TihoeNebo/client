import React from "react";
import ToggleButton from "../Redactor/ToggleButton.js";
import Redactor from "../Redactor/Redactor.js";
import Mail from "../Redactor/Mail.redactorElements.js";
import Pass from "../Redactor/Pass.redactorElements.js";
import { logIn } from '../../redux/actions.js';
import styles from "./header.module.scss";

export default function LogIn( ) {

    return (
        <ToggleButton style={styles.main_button} allowedLevel={0} title="вход">
            <Redactor action={logIn()} buttonTitle="Войти" style={null}>
                <h2>Вход</h2>
                <span className={styles.login_label}>e-mail: </span> <Mail /><br />
                <span className={styles.login_label}>пароль: </span> <Pass /><br />
            </Redactor>
        </ToggleButton>
    )
}

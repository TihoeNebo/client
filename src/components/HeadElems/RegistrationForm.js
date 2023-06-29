import React from "react";
import ToggleButton from "../Redactor/ToggleButton.js";
import Redactor from "../Redactor/Redactor.js";
import InputString from "../Redactor/InputString.js";
import * as action from "../../redux/actions/user.js";
import styles from "./header.module.scss";

export default function RegistrationForm() {

    return (
        <ToggleButton style={styles.main_button} allowedLevel={0} title="регистрация" >
            <Redactor action={action.createUser} buttonTitle={"Зарегистрироваться"} >
                <div><h2>Регистрация</h2>
                e-mail: <InputString action={action.writeMail} inputName={"mail"} /><br />
                Имя на сайте: <InputString action={action.writeName} inputName={"userName"} /><br />
                пароль: <InputString action={action.writePass} inputName={"pass"} /><br />
                повторите пароль: <InputString action={action.repeatPass} inputName={"repeatPass"} /></div>
            </Redactor>
        </ToggleButton>
        )
}


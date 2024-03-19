import React from "react";
import ToggleButton from "../../Redactor/ToggleButton.js";
import Redactor from "../../Redactor/Redactor.js";
import InputString from "../../Redactor/InputString.js";
import * as action from "../../../redux/actions/user.js";
import styles from "./registrationForm.module.scss";

export default function RegistrationForm() {

    return (
        <ToggleButton buttonStyle={styles.main_button} allowedLevel={0} title="регистрация" >
            <Redactor action={action.createUser} buttonTitle={"отправить"} >
                <h3 className={styles.title}><span>Р</span>егистрация</h3>
                <div className={styles.login_field}>
                    <p>e-mail:</p> 
                    <InputString action={action.writeMail} inputName={"mail"} />
                    <p>Имя на сайте:</p> 
                    <InputString action={action.writeName} inputName={"userName"} />
                    <p>пароль:</p> 
                    <InputString action={action.writePass} inputName={"pass"} />
                    <p>повторите пароль:</p> 
                    <InputString action={action.repeatPass} inputName={"repeatPass"} />
                </div>
            </Redactor>
        </ToggleButton>
        )
}


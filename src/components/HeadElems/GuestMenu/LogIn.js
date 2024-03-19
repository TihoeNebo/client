import React from "react";
import ToggleButton from "../../Redactor/ToggleButton.js";
import Redactor from "../../Redactor/Redactor.js";
import InputString from "../../Redactor/InputString.js";
import { writeMail, writePass, logIn } from "../../../redux/actions/user.js";
import styles from "./login.module.scss";


export default function LogIn() {

    return (
        <ToggleButton title={"вход"} buttonStyle={styles.main_button}>
            <Redactor action = {logIn} buttonTitle={"войти"}>
            <h3 className={styles.title}><span>В</span>ход</h3>
            <div className={styles.login_field}>
                <p>e-mail: </p> 
                <InputString action={writeMail} inputName={"mail"} />
                <p>пароль: </p>
                <InputString action={writePass} inputName={"pass"} />
            </div>
            </Redactor>
        </ToggleButton>
        
    )
}

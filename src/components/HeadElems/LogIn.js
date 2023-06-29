import React from "react";
import ToggleButton from "../Redactor/ToggleButton.js";
import Redactor from "../Redactor/Redactor.js";
import InputString from "../Redactor/InputString.js";
import { writeMail, writePass, logIn } from "../../redux/actions/user.js";
import styles from "./header.module.scss";


export default function LogIn( ) {

    return (
        <ToggleButton title={"вход"} style={styles.main_button}>
            <Redactor action = {logIn} >
            <div><h2>Вход</h2>
                <span>e-mail: </span> <InputString action={writeMail} inputName={"mail"} />
                <span>пароль: </span> <InputString action={writePass} inputName={"pass"} />
            </div>
            </Redactor>
        </ToggleButton>
        
    )
}

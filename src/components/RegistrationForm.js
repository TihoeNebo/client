import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Redactor from "./Redactor.js";
import ConfirmPass from "./ConfirmPass.redactorElements.js";
import Pass from "./Pass.redactorElements.js";
import Mail from "./Mail.redactorElements.js";
import Name from "./Name.redactorElements.js";
import { hideRegistration } from "../redux/actions.js";

export default function RegistrationForm() {

    const data = {
        type: "registerUser"
    }
    const isOpened = useSelector(state => state.popup.isRegistrationOpened);
    const dispatch = useDispatch();

    if (!isOpened) return null;
    
    return (
        <div>
            <div onClick={() => dispatch(hideRegistration())}>[x]</div>

            <Redactor data={ data } buttonTitle="Зарегистрироваться" launchReloading={hideRegistration()}>
                e-mail: <Mail /><br />
                Имя на сайте: <Name /><br />
                пароль: <Pass /><br />
                повторите пароль: <ConfirmPass />
            </Redactor>
        </div>
        )
}


import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Redactor from "../Redactor/Redactor.js";
import Mail from "../Redactor/Mail.redactorElements.js";
import Pass from "../Redactor/Pass.redactorElements.js";
import ConfirmPass from "../Redactor/ConfirmPass.redactorElements.js";
import { changeUserData, confirmMail } from "../../redux/actions.js";


export default function Account() {

    const isOpened = (useSelector(state => state.settings.section) === "ACCOUNT");
    const account = useSelector(state => state.data.user.account);
    const dispatch = useDispatch();

    if (!isOpened) return null;

    return (
        <>
            <h4>Настройки аккаунта.</h4>
            <div>
                <strong>Изменить e-mail:</strong>
                <Redactor action={changeUserData()} buttonTitle="Изменить">
                    <Mail mail={account.mail} /><br />
                </Redactor>
            </div>
            {!account.isMailConfirmed && 
                <div>
                <button onClick={ ()=> dispatch(confirmMail()) }>Отправить ссылку авторизации</button>
                </div>
            }
            <div>
                <strong>Изменить пароль:</strong>
                <Redactor action={changeUserData()} buttonTitle="Изменить">
                    Действующий пароль: <Pass /><br />
                    Новый пароль: <Pass newPass={true} /><br />
                    Повторите пароль: <ConfirmPass /><br />
                </Redactor>
            </div>
        </>
        )
}
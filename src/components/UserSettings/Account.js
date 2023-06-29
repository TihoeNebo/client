import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Redactor from "../Redactor/Redactor.js";
import InputString from "../Redactor/InputString.js";
import * as action from "../../redux/actions/user.js";


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
                <Redactor action={action.changeUserData()} buttonTitle="Изменить">
                    <InputString action={action.writeMail} inputName={"mail"} /><br />
                </Redactor>
            </div>
            {!account.isMailConfirmed && 
                <div>
                    <button onClick={ ()=> dispatch(action.confirmMail()) }>Отправить ссылку авторизации</button>
                </div>
            }
            <div>
                <strong>Изменить пароль:</strong>
                <Redactor action={action.changeUserData()} buttonTitle="Изменить">
                    Действующий пароль: <InputString action={action.writePass} inputName={"pass"} /><br />
                    Новый пароль: <InputString action={action.writeNewPass} inputName={"newPass"} /><br />
                    Повторите пароль: <InputString action={action.repeatPass} inputName={"repeatPass"} /><br />
                </Redactor>
            </div>
        </>
        )
}
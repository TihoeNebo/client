import React, { useState, useContext } from "react";
import UserContext from './UserContext';


export default function Register( setFormType ) {
    const [data, setData] = useState({
        email: null,
        pass: null,
        name: null
    });
    const [isPassConfirmed, setIsPassConfirmed] = useState(false);
    const [user, setContext] = useContext(UserContext);
    const changeForm = e => setData({ ...data, [e.target.name]: e.target.value });
    const confirmPass = e => setIsPassConfirmed(data.pass === e.target.value);
    const sendForm = () => {
        console.log("sendreg")
        if (isPassConfirmed) {
            setFormType(null);
            setContext({ ...user, level: 1 });
        }
    }
    
    return (
        <div>
            e-mail: <input type="text" name="email" onChange={changeForm} /><br />
            ник: <input type="text" name="name" onChange={changeForm} /><br />
            пароль: <input type="text" name="pass" onChange={changeForm} /><br />
            повторить пароль: <input type="text" name="repass" onChange={confirmPass} />
            <button onClick={ sendForm }>Зарегистрироваться</button>
        </div>
        )
}


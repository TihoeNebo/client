import React, { useState } from "react";
import { connect } from "react-redux";
import { logIn, hideLogIn } from '../redux/actions.js';

function LogIn({ isOpened, logIn, hideLogIn }) {

    const [data, setData] = useState({ email: null, pass: null });
    const changeForm = e => setData({ ...data, [e.target.name]: e.target.value });

    const getUserData = async () => {
        
        await logIn(data);
        
    }

    if (!isOpened) return null;

    return (
        <div>
            <div onClick={ ()=> hideLogIn()}>[X]</div>
            e-mail: <input type="text" name="email" onChange={ changeForm } />
            пароль: <input type="text" name="pass" onChange={ changeForm } />
            <button onClick={ getUserData }>Войти</button>
            
        </div>
    )
}

const mapStateToProps = state => ({
    isOpened: state.popup.isLogInOpened
})

export default connect(mapStateToProps, {logIn, hideLogIn})(LogIn)
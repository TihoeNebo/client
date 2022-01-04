import React from "react";
import { connect } from "react-redux";
import { showLogIn, showRegistration } from "../redux/actions.js";

function UnloginedMenu({ showLogIn, showRegistration }) {


    return (
        <div>
            <button onClick={() => showLogIn()}>Войти</button> /&nbsp;
            <button onClick={() => showRegistration()}>Регистрация</button>
        </div>
    )
}

const mapDispatchToProps = {
    showLogIn, showRegistration
};

export default connect(null, mapDispatchToProps)(UnloginedMenu)

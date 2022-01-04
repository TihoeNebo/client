import React, { useState } from "react";
import { useSelector } from 'react-redux';
import LoginedMenu from "./LoginedMenu";
import UnloginedMenu from "./UnloginedMenu";

export default function AuthenticationMenu() {

    const [formType, setFormType] = useState(null);
    const user = useSelector(state => state.user.account);

    return (
       <>
            {
                user.level !== 0 ?
                    <LoginedMenu /> :
                    <UnloginedMenu formType={formType} setFormType={setFormType} />
            }
       </>
    )
        
}



import React from "react";
import { useSelector } from 'react-redux';
import LoginedMenu from "./LoginedMenu";
import UnloginedMenu from "./UnloginedMenu";

export default function AuthenticationMenu() {

    const user = useSelector(state => state.data.user.account);

    return (
       <>
            {
                user.level !== 0 ?
                    <LoginedMenu /> :
                    <UnloginedMenu />
            }
       </>
    )
        
}



import React from "react";
import { useSelector } from 'react-redux';
import LoginedMenu from "./LoginedMenu";
import UnloginedMenu from "./UnloginedMenu";
import Loading from "../Loading/Loading.js";

export default function AuthenticationMenu() {

    const user = useSelector(state => state.data.user.account);
    const isLoaded = useSelector(state => state.loading.user);

    return (
        <Loading isLoaded={isLoaded}>
            {
                user.level !== 0 ?
                    <LoginedMenu /> :
                    <UnloginedMenu />
            }
        </Loading>
    )
        
}



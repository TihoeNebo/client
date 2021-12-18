import React, { useState } from "react";
import { useUserContext } from './UserContext';
import LoginedMenu from "./LoginedMenu";
import UnloginedMenu from "./UnloginedMenu";

export default function AuthenticationMenu() {

    const [formType, setFormType] = useState(null);
    const [mainData, setContext] = useUserContext();
        
    const userData = {
        level: 0,
        name: null
    }
    
    const logOut = () => {
        setContext({ ...mainData, user: userData});
        setFormType(null);
    }
    
    return (
       <>
            {
                mainData.user.level !== 0 ?
                    <LoginedMenu logOut={logOut} /> :
                    <UnloginedMenu formType={formType} setFormType={setFormType} />
            }
       </>
    )
        
}

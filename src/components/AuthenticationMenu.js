import React, { useState, useContext } from "react";
import UserContext from './UserContext';
import LoginedMenu from "./LoginedMenu";
import UnloginedMenu from "./UnloginedMenu";

export default function AuthenticationMenu() {

    const [formType, setFormType] = useState(null);
    const [user, setContext] = useContext(UserContext);
        
    const userData = {
        level: 0,
        switches: {
            createForumButton: false,
            createTopicButton: false,
            createPostButton: false
        }
    }
    
    const logOut = () => {
        setContext(userData);
        setFormType(null);
    }
    
    return (
       <>
            {
                user.level !== 0 ?
                    <LoginedMenu logOut={logOut} /> :
                    <UnloginedMenu formType={formType} setFormType={setFormType} />
            }
       </>
    )
        
}

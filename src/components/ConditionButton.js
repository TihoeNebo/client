import React, { useContext } from "react";
import UserContext from './UserContext';

export default function ConditionButton({ condition, title, callback }) {
    const [userData] = useContext(UserContext);
    
    return userData.switches[condition] ? ( <button onClick={ ()=> callback() }>{ title }</button> ) : null;
}
    


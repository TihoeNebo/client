import React from "react";
import { useUserContext } from './UserContext';

export default function ConditionButton({ condition, title, callback }) {
    const [userData] = useUserContext();
    
    return userData.switches[condition] ? ( <button onClick={ ()=> callback() }>{ title }</button> ) : null;
}
    


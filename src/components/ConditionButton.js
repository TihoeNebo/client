import React, { useContext } from "react";
import UserContext from './UserContext';

export default function ConditionButton({ condition, title, callback }) {
    const [buttonSwitches] = useContext(UserContext);
    
    return buttonSwitches[condition] ? ( <button onClick={ ()=> callback() }>{ title }</button> ) : null;
}
    


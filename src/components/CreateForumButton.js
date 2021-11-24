import React, { useContext } from "react";
import UserContext from './UserContext';

export default function CreateForumButton() {
    const [value] = useContext(UserContext);
    console.dir(value);
    return value ? (<button>button</button>) : null;
}
    


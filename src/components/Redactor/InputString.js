import React from "react";
import { useDispatch } from "react-redux";


export default function InputString({action, inputName}) {

    const dispatch = useDispatch();

    return (
        <input type="text" name={inputName} defaultValue={ "" } onChange={
            (e) => dispatch( action(e.target.value) )
        }
        />

    );
}
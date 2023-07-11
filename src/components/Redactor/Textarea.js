import React from "react";
import { useDispatch } from "react-redux";


export default function Textarea({action, content = null}) {

    const dispatch = useDispatch();

    return (
        <textarea onChange={
            (e) => dispatch( action(e.target.value) )
        }
        >
            {content}
        </textarea>

    );
}
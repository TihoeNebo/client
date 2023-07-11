import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hidePrompt } from "../../../redux/actions/popup.js";


export default function Prompt() {

    const prompt = useSelector(state => state.popup.prompt);
    const dispatch = useDispatch();

    if (!prompt) return null;

    return (
        <article>
            {prompt.question}
            <button onClick={
                () => {
                    dispatch(prompt.reducer);
                    dispatch(hidePrompt());
                }
            }>
                Да
            </button>
            <button onClick={() => dispatch(hidePrompt())}>Нет</button>
        </article>
    )
}
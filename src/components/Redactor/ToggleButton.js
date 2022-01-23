import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showRedactor } from "../../redux/actions.js";

export default function ToggleButton({ allowedLevel, title, children }) {

    const user = useSelector(state => state.data.user.account);
    const dispatch = useDispatch();

    return (
        <>
            {
                user.level >= +allowedLevel ? (
                    <div >
                        <button onClick={() => dispatch( showRedactor(children) ) }>{title}</button>
                    </div>

                ) : null
            }
        </>
    );
}





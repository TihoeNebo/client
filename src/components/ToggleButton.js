import React from "react";
import { useUserContext } from './UserContext';
import { showRedactor } from "../redux/actions.js";
import {connect} from "react-redux";

function ToggleButton({ allowedLevel, title, showRedactor, children }) {
    const [{ user }] = useUserContext();
    return (
        <>
            {
                user.level >= +allowedLevel ? (
                    <div >
                        <button onClick={() => showRedactor(children)}>{title}</button>
                    </div>

                ) : null
            }
        </>
    );
}

const mapDispatchToProps = { showRedactor };

export default connect(null, mapDispatchToProps)(ToggleButton);


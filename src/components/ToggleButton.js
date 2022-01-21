import React from "react";
import { showRedactor } from "../redux/actions.js";
import {connect} from "react-redux";

function ToggleButton({ user, allowedLevel, title, showRedactor, children }) {
    
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
const mapStateToProps = state => ({
    user: state.data.user.account
})

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButton);


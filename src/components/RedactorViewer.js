import React from "react";
import { connect } from "react-redux";
import { hideRedactor } from "../redux/actions.js";


function RedactorViewer({ redactor, hideRedactor }) {
    console.log(redactor)
    if (!redactor) return null;

    

    return (
        <article>
            <button onClick={() => hideRedactor()}>X</button>
            {redactor}
        </article>
    )
}

const mapStateToProps = state => ({ redactor: state.popup.redactor });
const mapDispatchToProps = { hideRedactor };

export default connect(mapStateToProps, mapDispatchToProps)(RedactorViewer);
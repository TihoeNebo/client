import React, { useEffect} from "react";
import { connect } from "react-redux";
import { hideAlert } from "../redux/actions.js";


function Alert({ alert, hideAlert }) {

    useEffect(() => {
        if (alert) setTimeout(() => hideAlert(), 3000);
    }, [alert])
    if (!alert) return null;
    return (
        <article onClick={ () => hideAlert() }>
            {alert}
        </article>
    )
}

const mapStateToProps = state => ({ alert: state.popup.alert });
const mapDispatchToProps = { hideAlert };

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
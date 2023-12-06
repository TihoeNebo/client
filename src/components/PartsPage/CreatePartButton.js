import React from "react";
import ToggleButton from "../Redactor/ToggleButton";
import InputString from "../Redactor/InputString.js";
import Redactor from "../Redactor/Redactor.js";
import { createPart, writeTitle } from "../../redux/actions/part.js";
import styles from "./createpartbutton.module.scss";

export default function CreatePartButton( ) {
    return (
        <ToggleButton allowedLevel="4" title="Создать раздел" buttonStyle={styles.createpart_button}>
            <Redactor action={createPart} >
                <h3>Новый раздел: </h3>
                <InputString action={writeTitle} inputName={"partName"} />
            </Redactor>
        </ToggleButton>
        )
}
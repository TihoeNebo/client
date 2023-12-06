import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./maintitle.module.scss";

export default function MainTitle() {

    const navigate = useNavigate();

    return (
        <h1 className={styles.header_maintitle} onClick={()=> navigate("/")}>
            <span className={styles.header_T}>Т</span>
            <span className={styles.header_firstword}>ихое</span>    
            <span className={styles.header_H}>Н</span>    
            <span className={styles.header_secondword}>ебо</span>        
        </h1>           
        )
}

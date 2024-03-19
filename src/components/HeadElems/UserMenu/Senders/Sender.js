import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { renderUser, showMessager } from "../../../../redux/actions/messager.js";
import styles from "./sender.module.scss";

export default function Sender({ senderData, renderedUser = null }) {

    const isMessagerOpened = useSelector(state => state.popup.messager);
    const dispatch = useDispatch();

    const { author, newMessagesCount, lastMessage } = senderData;
    const isPutted = (author.id == renderedUser) ? " putted" : "";
    
        
   return (
       <li className={`${isPutted }`} onClick={() => {
        if (!isPutted) {
            isMessagerOpened ? dispatch(renderUser(author.id)) : dispatch(showMessager(author.id));
        }
        }} ><span className={styles.menu_item} >
                <div className={styles.user}>
                    <div className={styles.avatar}></div>
                    <p>{author.name} ({newMessagesCount})</p>
                        <p>
                            {author.status}
                        </p>
                    
                </div>
                <div className={styles.message}>
                    <span className={styles.date}>{lastMessage.date}</span>
                    <quote className={styles.content}>{lastMessage.content}</quote>
                </div>
            </span>
        </li>
   );
    
}
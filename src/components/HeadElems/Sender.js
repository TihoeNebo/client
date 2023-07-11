import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { renderUser, showMessager } from "../../redux/actions/messager.js";

export default function Sender({ senderData, renderedUser = null }) {

    const isMessagerOpened = useSelector(state => state.popup.messager);
    const dispatch = useDispatch();

    const { author, newMessagesCount } = senderData;
    const isPutted = (author.id == renderedUser) ? " putted" : "";
        
   return (
       <li className={`sender` + isPutted } onClick={() => {
           if (!isPutted) {
               isMessagerOpened ? dispatch(renderUser(author.id)) : dispatch(showMessager(author.id));
           }
       }} >
                {author.name} ({newMessagesCount})<br />
                <span>
                    {author.status}
                </span>
            </li>
   );
    
}
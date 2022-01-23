import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PopupList from "./PopupList.js";
import Sender from "./Sender.js";
import { getSenders } from "../../redux/actions.js";


export default function Senders( ) {

    const visibilityState = useState(false);
    const [isVisible, setVisibility] = visibilityState;

    const data = useSelector(state => state.data.messager.senders);
    const user = useSelector(state => state.data.user.account);
    const dispatch = useDispatch();

    useEffect(() => { if (isVisible) dispatch(getSenders()); }, [isVisible]);
    const elements = data.length ? data.map(sender => <Sender senderData={sender} />) : null;

    return (
        <li onClick={() => setVisibility(true)}>
            Сообщения <span>{user.newMessagesCount}</span>
            <PopupList data={elements} visibilityState={visibilityState} />
        </li>
    )
}


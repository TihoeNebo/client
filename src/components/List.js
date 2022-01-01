import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PopupList from "./PopupList.js";
import Notice from "./Notice.js";
import Sender from "./Sender.js";
import { useUserContext } from "./UserContext.js";
import { getNotices, getSenders } from "../redux/actions.js";



export default function List({ type }) {

    const visibilityState = useState(false);
    const [_, setVisibility] = visibilityState;
    console.log(type)
    const data = useSelector(state => state.messager[type])
    const dispatch = useDispatch();

    const [{ user }] = useUserContext();

    useEffect(() => {
        switch (type) {
            case "notices":
                return dispatch(getNotices());
            case "senders":
                return dispatch(getSenders());
        }
        
    }, [true]);

    const mapMethods = {
        notices: notice => <Notice data={notice} />,
        senders: sender => <Sender senderData={sender} />
    }

    const elements = data.length ? data.map(mapMethods[type]) : null;

    return (
        <li onClick={()=>setVisibility(true)}>
            {
                type == "notices" ?
                    <>
                        Уведомления <span> {user.newNoticesCount}</span>
                    </>
                    :
                    <>
                        Сообщения <span>{user.newMessagesCount}</span>
                    </>
            }
            
            <PopupList data={elements} visibilityState={visibilityState} />
        </li>            
    )
}


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sender from "./Sender.js";
import Message from "./Message.js";
import { useUserContext } from "./UserContext.js";
import sendersSource from "../senderssource.js";
import messagesSource from "../messagessource.js";

export default function Messager({ senderId }) {
    const [userData, setContext] = useUserContext();
    const [senders, setSenders] = useState([]);
    const [messages, setMessages] = useState([]);
    const [renderedUserId, setRenderedUser] = useState(senderId);

    useEffect(async () => {
        setSenders(await getSenders());
    }, [true]);
    useEffect(async () => {
        setMessages(await getMessages(renderedUserId));
        
    }, [true]);
    console.log(senders)
    const sendersList = senders.length ? senders.map(
        (senderData) => {
            return Sender(senderData, (senderData.author.id === renderedUserId) )
        }
    ) : "Пусто";
    
    const titleData = senders.length ? senders.find(data => data.author.id === +renderedUserId) : null;

    const messagesList = messages.length ? messages.map(
        (messageData) =>   Message( messageData ) ) : "Сообщений нет.";

    return (
        <article>
            {titleData ? (
                <header>
                    <h3>
                        <Link to={`/profile/${titleData.author.id}`}>
                            {titleData.author.name}
                        </Link>
                    </h3>
                    <span>
                        {titleData.author.status}
                    </span>
                </header>
            ) : (
                    <header></header>
                )
            }
            <section>
                {sendersList}
            </section>
            <section>
                {messagesList}
            </section>
            <div>
                <textarea />
                <button>Отправить</button>
            </div>
        </article>
    );
}

async function getSenders() {
    return sendersSource;
}

async function getMessages(senderId) {
    return messagesSource;
}

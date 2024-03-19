import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Author from "../../Profile/Author.js";
import IgnoreButton from "../../Profile/IgnoreButton.js";
import Sender from "../UserMenu/Senders/Sender.js";
import Message from "../Message.js";
import Redactor from "../../Redactor/Redactor.js";
import Textarea from "../../Redactor/Textarea.js";
import Loading from "../../Loading/Loading.js";
import { hideMessager, sendMessage, getMessages, writeMessage } from "../../../redux/actions/messager.js";


export default function Messager() {

    const isOpened = useSelector(state => state.popup.messager);

    const isSendersLoaded = useSelector(state => state.loading.senders);
    const isMessagesLoaded = useSelector(state => state.loading.messages);

    const senders = useSelector(state => state.data.messager.senders);
    const messages = useSelector(state => state.data.messager.messages);
    const renderedUser = useSelector(state => state.messager.renderedUser);
    const dispatch = useDispatch();

    useEffect(() => { if (renderedUser) dispatch(getMessages(renderedUser)); }, [renderedUser]);
            
    if (!isOpened) return null;

    const sendersList = senders.length ? senders.map(
        senderData => <Sender senderData={senderData} renderedUser={renderedUser} />
    ) : "Пусто";

    const messagesList = messages.length ? messages.map(
        data => <Message messageData={data} />
    ) : "Сообщений нет.";
    
    const titleData = senders.length ? senders.find(data => data.author.id == renderedUser) : null;

    return (
        <article>
            <button onClick={() => dispatch(hideMessager()) }>[X]</button>
            {titleData ? 
                <header>
                    <h3>
                        <Author author={titleData.author} />
                        <IgnoreButton userId={titleData.author.id} />
                    </h3>
                    <span>
                        {titleData.author.status}
                    </span>
                </header>
             : 
                <header>Пользователь не выбран</header>
            }
            <section>
                <Loading isLoaded={isSendersLoaded}>
                    <ul>
                        {sendersList}
                    </ul>
                </Loading>
            </section>
                <section>
                <Loading isLoaded={isMessagesLoaded}>
                    {messagesList}
                </Loading>
            </section>
            <Redactor action={ sendMessage(renderedUser) }>
                <Textarea action={writeMessage} />
            </Redactor>
        </article>
    );
}

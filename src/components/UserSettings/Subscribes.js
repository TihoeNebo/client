import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Subscribe from "./Subscribe.js";
import Loading from "../Loading/Loading.js";
import { changeMailingSettings, getMailingSettings } from "../../redux/actions/settings.js";
import { getSubscribes } from "../../redux/actions/subscribe.js";


export default function Subscribes() {

    const subscribes = useSelector(state => state.data.messager.subscribes);
    const mailing = useSelector(state => state.data.messager.mailing);
    const isOpened = (useSelector(state => state.settings.section) === "SUBSCRIBES");
    const isSubscribesLoaded = useSelector(state => state.loading.subscribes);
    const isMailingLoaded = useSelector(state => state.loading.mailing);
    const dispatch = useDispatch();

    useEffect(async () => {
        if (isOpened) {
            await dispatch(getMailingSettings());
            await dispatch(getSubscribes());
        }
    }, [isOpened]);


    if (!isOpened) return null;

    const subscribeList = subscribes.length ? subscribes.map(subscribe => <Subscribe data={subscribe} />) : null;
    

    const checkboxHandler = (e) => dispatch(
        changeMailingSettings({
            mailing: { [e.target.name]: e.target.selected }
        })
    );

    console.log(mailing)

    return (
        <>
            
                <div>
                    <h4>Параметры оповещений.</h4>
                <Loading isLoaded={isMailingLoaded}>
                    {mailing &&
                        <><input type="checkbox"
                            onChange={checkboxHandler}
                            name="privateMessages"
                            checked={mailing.privateMessages} /> присылать на мой e-mail оповещения о новых личных сообщениях.<br />
                        <input type="checkbox"
                            onChange={checkboxHandler}
                            name="subscribes"
                        checked={mailing.subscribes} /> присылать на мой e-mail оповещения о сообщениях в темах, на которые я подписан.
            </>}
                    </Loading>
                </div>
            <div>
                <h4>Подписки.</h4>
                <div>
                    <Loading isLoaded={isSubscribesLoaded}>
                        {subscribeList || "Подписок нет."}
                    </Loading>
                </div>
            </div>
        </>
        );
}
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Ignored from "./Ignored.js";
import { getIgnored } from "../../redux/actions.js";


export default function IgnoreList() {

    const ignored = useSelector(state => state.data.messager.ignored);
    const isOpened = (useSelector(state => state.settings.section) === "IGNORELIST");
    const dispatch = useDispatch();

    useEffect(() => {
        if (isOpened) dispatch(getIgnored());
    }, [isOpened]);

    if (!isOpened) return null;
    const ignoreList = ignored.length ? ignored.map(ignored => <Ignored data={ignored} />) : null;

    return (
        <>
            <div>
                <h4>Игнорируемые пользователи.</h4>
                <div>
                    {ignoreList || "Список пуст."}
                </div>
            </div>
        </>
    );
}
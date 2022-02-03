import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Ignored from "./Ignored.js";
import Loading from "../Loading/Loading.js";
import { getIgnored } from "../../redux/actions.js";


export default function IgnoreList() {

    const ignored = useSelector(state => state.data.messager.ignored);
    const isOpened = (useSelector(state => state.settings.section) === "IGNORELIST");
    const isLoaded = useSelector(state => state.loading.ignored);
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
                <Loading isLoaded={isLoaded}>
                    <div>
                        {ignoreList || "Список пуст."}
                    </div>
                </Loading>
            </div>
        </>
    );
}
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIgnored, deleteIgnored, createIgnored } from "../../redux/actions/settings.js";


export default function IgnoreButton({ userId }) {

    const ignored = useSelector(state => state.data.messager.ignored);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIgnored())
    }, [true]);

    const isIgnored = ignored.length ? (ignored.find(user => user.id === userId)) : false;

    return (
        <>
            {
                isIgnored ?
                    <button onClick={() => dispatch(deleteIgnored(userId))}>
                        Отменить игнор
                    </button> :
                    <button onClick={() => dispatch(createIgnored(userId))}>
                        Игнорировать
                    </button>
            }
        </>
    )
}
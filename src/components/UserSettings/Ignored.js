import React from "react";
import { useDispatch } from "react-redux";
import { deleteIgnored } from "../../redux/actions/settings.js";


export default function Ignored({ data }) {

    const dispatch = useDispatch();

    return (
        <div>
            <p>{data.name}</p>
            <button onClick={() => dispatch(deleteIgnored(data.id))}>
                Отменить
            </button>
        </div>
    );
}
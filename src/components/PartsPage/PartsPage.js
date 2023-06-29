import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Part from './Part.js';
import CreatePartButton from "./CreatePartButton.js";
import Loading from "../Loading/Loading.js";
import { getParts  } from "../../redux/actions/parts.js";

export default function PartsPage() {
    console.log("partlist")

    const parts = useSelector(state => state.data.parts);
    const isLoaded = useSelector(state => state.loading.parts);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getParts());
    }, [true]);

    const partList = parts.length ? parts.map((data, i) => <Part part={data} key={i} />) : null;

    return (
        <div className="parts">
            <Loading isLoaded={isLoaded}>
                {partList}
            </Loading>
            <CreatePartButton />
        </div>

    );
}
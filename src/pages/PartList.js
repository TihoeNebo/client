﻿import React, { useState, useEffect } from "react";
import Part from '../components/part.js';
import partsData from "../source.js";
import ConditionButton from "../components/ConditionButton"

const PartList = () => {
    console.log("partlist")
    const [parts, setParts] = useState([]);
    useEffect(() => {
        console.log("setparts")
        setParts(partsData)
    })
    const partList = parts.map(data => <Part part={data} />);
    return (
        <div className="parts">
            {partList}
            <ConditionButton
                condition="createForumButton"
                title="Создать форум"
                callback={() => console.log("Клик!")}
            />
        </div>
        
    )
}

export default PartList;

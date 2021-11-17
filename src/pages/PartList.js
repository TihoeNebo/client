import React from "react";
import Part from '../components/part.js';
import parts from "../source.js";

const PartList = () => {
    const partList = parts.map(data => <Part part={data} />);
    return (
        <div className="parts">
            {partList}
        </div>
    )
}

export default PartList;

import React from "react";
import Part from '../components/part.js';
import parts from "../source.js";
import ConditionButton from "../components/ConditionButton"

const PartList = () => {
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

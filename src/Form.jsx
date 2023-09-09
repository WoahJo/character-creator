// import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form(props) {
    const { attributes } = props; 
    const [stat1, setStat1] = useState(0); 

    const statItems = attributes.map((prop) => 
        <div key={uuidv4()} id="formValues">
            <p>{prop}</p>
            <input type="number" onClick={(e)=> handlePoint(e)}/>
        </div>
        )
        console.log(statItems);

    const handlePoint = (e) => {
        const attr = e.target.previousSibling.textContent;

        switch (true) {
            case attr === 'Strength':
                setStat1(stat1 + e.target.value)
                
                break;
        
            default:
                break;
        }
    }

    return (
        <>
            {statItems}
            {/* {attributes.map((prop) => (
                <div key={prop.id} id="formValues">
                    <h1>{prop.attr}</h1>
                    <input type="number" />
                </div>
            ))}  */}
        </>
    );
}

Form.propTypes = {
    attributes: PropTypes.arrayOf(PropTypes.string).isRequired,
};
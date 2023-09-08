// import React from "react";
import PropTypes from "prop-types";
export default function Form(props) {
    const { attributes } = props; 
    // const statItems = attributes.map((prop) => 
    //     <h1 key={}
    // )
    return (
        <>
            {attributes.map((prop) => (
                <div key={prop.id} id="formValues">
                    <h1>{prop.attr}</h1>
                    <input type="number" />
                </div>
            ))} 
        </>
    );
}

Form.propTypes = {
    attributes: PropTypes.arrayOf(PropTypes.string).isRequired,
};
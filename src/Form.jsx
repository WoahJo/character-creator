// import React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
// import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form(props) {
    const { attributes } = props; 
    const [points, setPoints] = useState(10);
    // takes attributes and adds them to an object as keys and sets each value to 0, the object is then used as the state
    // const [stats, setStats] = useState(
    //     attributes.reduce((acc, attribute) => {
    //       acc[attribute] = 0;
    //       return acc;
    //     }, {})
    //   );

    const [stats, setStats] = useState({});

    useEffect(() => {
        setStats(
            attributes.reduce((acc, attribute) => {
                acc[attribute] = 0;
                return acc;
            }, {})
        );
        setPoints(10)
    }, [attributes])

    const less = (attr) => {
        if(stats[attr] > 0) {
            setStats((prevStats) => ({
                ...prevStats,
                [attr]: prevStats[attr] - 1,
            }))
            setPoints(points + 1);
        }
    }

    const add = (attr) => {
        if(points > 0) {
            setStats((prevStats) => ({
                ...prevStats, 
                [attr]: prevStats[attr] + 1,
            }))
            setPoints(points - 1);
        }
    }

    const changeStat = (attr, dir) => {
        dir(attr);
    }

    const attrs = Object.keys(stats).map((attr) => (
        <div key={uuidv4()}>
          <h1>{attr}</h1>
          <div>
            <span onClick={() => changeStat(attr, less)}> &lt; </span>
            {stats[attr]}
            <span onClick={() => changeStat(attr, add)}> &gt; </span>
          </div>
        </div>
      ));

    return (
        <>
            <h1>{points}</h1>
            <div>{attrs}</div>
        </>
    );
}

Form.propTypes = {
    attributes: PropTypes.arrayOf(PropTypes.string).isRequired,
};
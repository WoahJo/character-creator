import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Results from "./Results";
import Image from "./Image";
import './Form.css';

export default function Form(props) {
    const { attributes, bio, initPoints } = props; 
    const [points, setPoints] = useState(initPoints);
    const [stats, setStats] = useState({});

    useEffect(() => {
        setStats(
            attributes.reduce((acc, attribute) => {
                acc[attribute] = 0;
                return acc;
            }, {})
        );
        initPoints > 0 ? setPoints(initPoints) : setPoints(0);
    }, [attributes, initPoints])

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
        if(initPoints.isNaN || initPoints <= attributes.length) {
            alert('Point limit must be greater than ' + attributes.length + '.');
            return;
        }
        dir(attr);
    }

    const onRandom = () => {
        if(initPoints.isNaN || initPoints <= attributes.length) {
            alert('Point limit must be greater than ' + attributes.length + '.');
            return;
        }
        setPoints(initPoints)
        let remainingPoints = initPoints;

        for(let i = 0; i < attributes.length; i++) {
            let rando = Math.round(Math.random() *(remainingPoints/3 - 1)) + 1;
            if(i === attributes.length - 1) {
                setStats((prevStats) => ({
                    ...prevStats, 
                    [attributes[i]]: remainingPoints,
                }))
            } else {
                setStats((prevStats) => ({
                    ...prevStats, 
                    [attributes[i]]: rando,
                }))
                remainingPoints -= rando;
            }
        }
        setPoints(0);
    }

    const attrs = Object.keys(stats).map((attr) => (
        <div key={uuidv4()}>
          <h3>{attr}</h3>
          <div>
            <span onClick={() => changeStat(attr, less)} className="arrow"> &lt; </span>
            {stats[attr]}
            <span onClick={() => changeStat(attr, add)} className="arrow"> &gt; </span>
          </div>
        </div>
      ));

    return (
        <>  
            <div className="formEle">
                <h2>Attributes:</h2>
                <button onClick={onRandom}>Randomize stats!</button>
                <h3>Points left: </h3>
                <h3>{points}</h3>
                <div>{attrs}</div>
            </div>
            <div className="results">
                <button onClick={window.print}>Print/save</button>
                <div className="charBioImg">
                    <Results stats={stats} bio={bio} />
                    <Image />
                </div>
                <div className='backstory'>
                    <h3> Backstory:</h3>
                    <div>{bio['Backstory']}</div>
                </div>
            </div>
        </>
    );
}

Form.propTypes = {
    attributes: PropTypes.arrayOf(PropTypes.string).isRequired,
    bio: PropTypes.object.isRequired,
    initPoints: PropTypes.number.isRequired,
};
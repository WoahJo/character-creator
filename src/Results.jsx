import PropTypes from 'prop-types';
import { v4 as uuidv4} from 'uuid';
import './Results.css';

export default function Results(props) {
    const { stats, bio } = props; 

    const filledAttr = Object.keys(stats).map((attr) => (
        <div key={uuidv4()} className='attrPair'>
            <h3>{attr}</h3>
            <p>{stats[attr]}</p>
        </div> 
      ));

    return (
        <div className='charInfo'>
            <div key={uuidv4()} id="bioGroup">
                <div className="bioRes">
                    <h3>Name: <span>{bio['Name']}</span></h3>
                    <h3>Age: <span>{bio['Age']}</span></h3>
                    <h3>Gender: <span>{bio['Gender']}</span></h3>
                    <h3>Race: <span>{bio['Race']}</span></h3>
                </div>
            </div>
            <div className="attrGroup">
                {filledAttr}
            </div>
            {/* <div className='backstory'>
                <h2> Backstory:</h2>
                <p>{bio['Backstory']}</p>
            </div> */}
        </div>
    )
}

Results.propTypes = {
    stats: PropTypes.object.isRequired,
    bio: PropTypes.object.isRequired,
}
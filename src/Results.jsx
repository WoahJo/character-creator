import PropTypes from 'prop-types';
import { v4 as uuidv4} from 'uuid';

export default function Results(props) {
    const { stats, bio } = props; 

    const filledAttr = Object.keys(stats).map((attr) => (
        <div key={uuidv4()} id='attrPair'>
            <h1>{attr}</h1>
            <p>{stats[attr]}</p>
        </div> 
      ));

    return (
        <>
            <div key={uuidv4()} id="bioGroup">
                <div className="bioRes">
                    <h2>Name: <span>{bio['Name']}</span></h2>
                    <h2>Age: <span>{bio['Age']}</span></h2>
                    <h2>Gender: <span>{bio['Gender']}</span></h2>
                    <h2>Race: <span>{bio['Race']}</span></h2>
                </div>
            </div>
            <div className="attrGroup">
                {filledAttr}
            </div>
        </>
    )
}

Results.propTypes = {
    stats: PropTypes.object.isRequired,
    bio: PropTypes.object.isRequired,
}
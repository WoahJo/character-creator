import PropTypes from 'prop-types';
import { v4 as uuidv4} from 'uuid';

export default function Results(props) {
    const { stats } = props; 

    const filled = Object.keys(stats).map((attr) => (
        <div key={uuidv4()} id='attrGroup'>
            <h1>{attr}</h1>
            <p>{stats[attr]}</p>
         {/*  <div>
            <span onClick={() => changeStat(attr, less)}> &lt; </span>
            {stats[attr]}
            <span onClick={() => changeStat(attr, add)}> &gt; </span>
    </div> */}
        </div> 
      ));
    
    return (
        <div className="results">
            {filled}
        </div>
    )
}

Results.propTypes = {
    stats: PropTypes.object.isRequired,
}
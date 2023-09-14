import { useState, useRef } from "react";
import PropTypes from "prop-types";


export default function Image () {
    const [image, setImage] = useState('');
    const imgRef = useRef();

    const handleClick = () => {
        imgRef.current.click();
    }

    const handleImg = () => {
        const file = imgRef.current.files[0];

        if(file) setImage(URL.createObjectURL(file));
    }
    
    return (
        <div className="charImage">
            <div className="imgContainer" onClick={handleClick}>
                <input type="file" 
                accept='.jpg, .jpeg, .png'
                style={{display: 'none'}}
                onChange={handleImg}
                ref={imgRef}/>
                <label>Click to add/edit an image</label>
                <img alt="" src={image} />
            </div>
        </div>
    )
}

Image.propTypes = {
    image: PropTypes.string,
}
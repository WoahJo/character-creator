import { useState, useRef } from "react";
import PropTypes from "prop-types";
import './Image.css';


export default function Image () {
    const [image, setImage] = useState('');
    const imgRef = useRef();
    const imgContRef = useRef();

    const handleClick = () => {
        imgRef.current.click();
    }

    const handleImg = () => {
        const file = imgRef.current.files[0];

        if(file) {
            imgContRef.current.style.border = 'none';
            setImage(URL.createObjectURL(file));}
    }
    
    return (
        <div className="charImage">
            <div className="imgContainer" ref={imgContRef} onClick={handleClick}>
            <label>Click to add/edit an image (.png, .jpg)</label>
                <input type="file" 
                accept='.jpg, .jpeg, .png'
                style={{display: 'none'}}
                onChange={handleImg}
                ref={imgRef}/>
                <img alt="" src={image} />
            </div>
        </div>
    )
}

Image.propTypes = {
    image: PropTypes.string,
}
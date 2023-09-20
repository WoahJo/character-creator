import { useState, useRef } from 'react'
import './App.css'
import Form from './Form';

function App() {
  const [attributes, setAttributes] = useState(['Strength', 'Constitution', 'Dexterity', 'Intelligence', 'Wisdom', 'Charisma']);
  const [bio, setBio] = useState({
    Name: null, 
    Age: null,
    Gender: null,
    Race: null,
    Backstory: null,
  });
  const [initPoints, setInitPoints] = useState(0);
  const helpRef = useRef();


  // ALSO NEED STAT NUMBERS!

  const onDnd = () => {
    console.log('Setting Dnd 6');
    setAttributes(['Strength', 'Constitution', 'Dexterity', 'Intelligence', 'Wisdom', 'Charisma']);
  }

  const onSpec = () => {
    console.log('Setting SPECIAL');
    setAttributes(['Strength', 'Perception', 'Endurance', 'Charisma', 'Intelligence', 'Agility', 'Luck']);
    console.log(attributes);
  }

  const onBio = (e) => {
    setBio((prevBio) => ({
      ...prevBio, 
      [e.target.previousSibling.textContent]: e.target.value,
    }));
  }

  const onPoints = (e) => {
    const pointsNum = parseInt(e.target.value); 
    !pointsNum.isNaN && setInitPoints(pointsNum);
  }

  const showHelp = () => {
    helpRef.current.style.display = 'block';
  }

  const close = () => {
    helpRef.current.style.display = 'none';
  }

  return (
    <div className='setForm'>
      <div className='formContainer'>
        <div className="attrSelect">
          <div className="attrsPoints">
            <label htmlFor='attrList'>Select attribute system (WIP):</label>
            <select>
              <option value=' '>---</option>
              <option value='D&D 6' onClick={onDnd}>D&D 6 (default)</option>
              <option value='SPECIAL (Fallout)' onClick={onSpec}>S.P.E.C.I.A.L</option>
            </select>
          </div>
          <div className="pointSelect">
            <label htmlFor='pointSys'>Point limit</label>
            <input type='text' id='pointSys' onChange={(e) => onPoints(e)}/>
          </div> 
          <button onClick={showHelp}>Help</button>
          <div className="helpBox" ref={helpRef} onClick={close}>
            <p>Thanks for using [name]! Here are some quick tips to get you started: </p>
            <ul>
              <li>Choose an attribute system from the drop-down menu. More to come soon!</li>
              <li>A point limit must be set before attempting to distribute attribute points.</li>
              <li>By pressing &quot;Randomize stats!&quot;, points are assigned randomly to the available attributes based on the given point limit.</li>
              <li>Use the arrows located at each side of a stat&apos;s number to change its value.</li>
              <li>It is best to use portrait-oriented images (height greater than width) to avoid resizing that results in an unreadable image.</li>
            </ul>
            <p>[Click this window to close]</p>
          </div>
        </div>
        <div className="attrContainer">
          <p>Bio:</p>
          <div className="bio">
            <div className="bioItem">
              <label htmlFor="charName">Name</label>
              <input type='text' id="charName" onChange={(e) => onBio(e)}/>
            </div>
            <div className="bioItem">
              <label htmlFor="charAge">Age</label>
              <input type='text' id="charAge" onChange={(e) => onBio(e)}/>
            </div>
            <div className="bioItem">
              <label htmlFor="charGender">Gender</label>
              <input type='text' id="charGender" onChange={(e) => onBio(e)}/>
            </div>
            <div className="bioItem">
              <label htmlFor="charRace">Race</label>
              <input type='text' id="charRace" onChange={(e) => onBio(e)}/>
            </div>
          </div>
          <div className="story">
            <label htmlFor='description'>Backstory</label>
            <textarea maxLength={500} id='description' onChange={(e) => onBio(e)}/>
          </div>
        </div>
      </div>
      <div className="formMirror">
        <Form attributes={attributes} bio={bio} initPoints={initPoints} />
      </div>
    </div>
  )
}

export default App;

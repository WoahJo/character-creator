import { useState } from 'react'
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
  return (
    <div className='setForm'>
      <div className='formContainer'>
        <div className="attrSelect">
          <div className="attrsPoints">
            <label htmlFor='attrList'>Select attribute system (WIP):</label>
            <select>
              <option value=' '>---</option>
              <option value='D&D 6' onClick={onDnd}>D&D 6</option>
              <option value='SPECIAL (Fallout)' onClick={onSpec}>S.P.E.C.I.A.L</option>
            </select>
          </div>
          
          {/* <div className="attrList">
            <input type='radio' name='attrStyle' id='dnd6' onClick={onDnd} defaultChecked/>
            <label htmlFor='dnd6'>D&D 6</label>
          </div>
          <div className="attrList">
            <input type='radio' name='attrStyle' id='spec' onClick={onSpec}/>
            <label htmlFor='spec'>S.P.E.C.I.A.L (Fallout)</label>
          </div>*/}
          <div className="pointSelect">
            <label htmlFor='pointSys'>Point limit</label>
            <input type='text' id='pointSys' onChange={(e) => onPoints(e)}/>
          </div> 
        </div>
        <hr></hr>
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

import { useState } from 'react'
import './App.css'
import Form from './Form';

function App() {
  const [attributes, setAttributes] = useState([])


  // ALSO NEED STAT NUMBERS!

  const onDnd = () => {
    console.log('Setting Dnd 6');
    setAttributes(['Strength', 'Constitution', 'Dexterity', 'Intelligence', 'Wisdom', 'Charisma']);
  }

  const onSpec = () => {
    console.log('Setting SPECIAL');
    setAttributes(['Strength', 'Perception', 'Endurance', 'Charisma', 'Intelligence', 'Agility', 'Luck']);
  }
  return (
    <>
      <div className='formContainer'>
        <div className="attrList">
          <input type='radio' name='attrStyle' id='dnd6' onClick={onDnd} defaultChecked/>
          <label htmlFor='dnd6'>D&D 6</label>
        </div>
        <div className="attrList">
        <input type='radio' name='attrStyle' id='spec' onClick={onSpec}/>
          <label htmlFor='spec'>S.P.E.C.I.A.L (Fallout)</label>
        </div>
      </div>
      <Form attributes={attributes} />
    </>
  )
}

export default App;

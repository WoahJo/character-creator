import { useState } from 'react'
import './App.css'
import Form from './Form';

function App() {
  const [attr1, setAttr1] = useState('');
  const [attr2, setAttr2] = useState('');
  const [attr3, setAttr3] = useState('');
  const [attr4, setAttr4] = useState('');
  const [attr5, setAttr5] = useState('');
  const [attr6, setAttr6] = useState('');
  const [attr7, setAttr7] = useState('');

  const [id1, setId1] = useState('');
  const [id2, setId2] = useState('');
  const [id3, setId3] = useState('');
  const [id4, setId4] = useState('');
  const [id5, setId5] = useState('');
  const [id6, setId6] = useState('');
  const [id7, setId7] = useState('');


  // ALSO NEED STAT NUMBERS!

  const onDnd = () => {
    console.log('Setting Dnd 6');
    setAttr1('Strength');
    setId1('Strength');
    setAttr2('Constitution');
    setId2('Constitution');
    setAttr3('Dexterity');
    setId3('Dexerity');
    setAttr4('Intelligence');
    setId4('Intelligence');
    setAttr5('Wisdom');
    setId5('Wisdom');
    setAttr6('Charisma');
    setId6('Charisma');
    setAttr7(null);
    setId7(null);
  }

  const onSpec = () => {
    console.log('Setting SPECIAL');
    setAttr1('Strength');
    setId1('Strength2');
    setAttr2('Perception');
    setId2('Perception');
    setAttr3('Endurance');
    setId3('Endurance');
    setAttr4('Charisma');
    setId4('Charisma2');
    setAttr5('Intelligence');
    setId5('Intelligence2')
    setAttr6('Agility');
    setId6('Agility');
    setAttr7('Luck');
    setId7('Luck');
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
      <Form attributes={[{attr: attr1, id: id1}, {attr: attr2, id: id2}, {attr: attr3, id: id3}, {attr: attr4, id: id4}, {attr: attr5, id: id5}, {attr: attr6, id: id6}, {attr: attr7, id: id7}]} />
    </>
  )
}

export default App;

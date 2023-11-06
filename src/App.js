import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import CharacterSheet from './components/CharacterSheet';
import CharacterClasses from './components/CharacterClasses';
import Skills from './components/Skills';
import CharacterData from './components/CharachterData';

function App() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [characterData, setCharacterData] = useState({});

  const selectCharacterClass = (className) => {
    setSelectedClass(className);
  };

  // Create a state for attributeModifiers, you can set initial values here.
  const [attributeModifiers, setAttributeModifiers] = useState({
    Strength: 0,
    Dexterity: 0,
    Constitution: 0,
    Intelligence: 0,
    Wisdom: 0,
    Charisma: 0,
  });

  return (
    <div className="App">
      <h1>Character Creator</h1>
      <CharacterData githubUsername="faeyazdani@gmail.com" />
      <CharacterClasses
        classes={CLASS_LIST}
        selectedClass={selectedClass}
        onSelectClass={selectCharacterClass}
      />
      <CharacterSheet
        attributeList={ATTRIBUTE_LIST}
        classList={CLASS_LIST}
        selectedClass={selectedClass}
      />
      <Skills skillsList={SKILL_LIST} attributeModifiers={characterData.attributeModifiers || {}} />
    </div>
  );
}

export default App;

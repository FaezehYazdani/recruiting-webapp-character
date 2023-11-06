import React, { useState, useEffect } from 'react';

const CharacterSheet = ({ attributeList, classList, selectedClass }) => {
  const [attributes, setAttributes] = useState(
    attributeList.reduce((initialState, attribute) => {
      initialState[attribute] = 10;
      return initialState;
    }, {})
  );

  const [abilityModifiers, setAbilityModifiers] = useState({});

  const handleAttributeChange = (attribute, value) => {
    value = Math.min(70, Math.max(0, value));

    setAttributes({
      ...attributes,
      [attribute]: value,
    });
  };

  useEffect(() => {
    // Calculate ability modifiers when attributes change
    const modifiers = {};
    attributeList.forEach((attribute) => {
      const value = attributes[attribute];
      const modifier = Math.floor((value - 10) / 2);
      modifiers[attribute] = modifier;
    });
    setAbilityModifiers(modifiers);
  }, [attributes, attributeList]);

  const incrementAttribute = (attribute) => {
    handleAttributeChange(attribute, attributes[attribute] + 1);
  };

  const decrementAttribute = (attribute) => {
    handleAttributeChange(attribute, attributes[attribute] - 1);
  };

  return (
    <div>
      <h2>Attributes</h2>
      <div id="attributes">
        {attributeList.map((attribute) => (
          <div key={attribute}>
            <label>
              {`${attribute}: ${attributes[attribute]} (Modifier: ${abilityModifiers[attribute]})`}
            </label>
            <button onClick={() => incrementAttribute(attribute)}>+</button>
            <button onClick={() => decrementAttribute(attribute)}>-</button>
          </div>
        ))}
      </div>

      {selectedClass && (
        <div>
          <h3>{selectedClass} Requirements</h3>
          <ul>
            {Object.keys(classList[selectedClass]).map((attribute) => (
              <li key={attribute}>
                {attribute}: {classList[selectedClass][attribute]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CharacterSheet;

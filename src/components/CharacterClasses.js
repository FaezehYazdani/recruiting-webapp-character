import React from 'react'

const CharacterClasses = ({ classes, selectedClass, onSelectClass }) => {
    return (
      <div id="classes">
        <h2>Classes</h2>
        <ul>
          {Object.keys(classes).map((className) => (
            <li
              key={className}
              onClick={() => onSelectClass(className)}
              className={selectedClass === className ? 'selected' : ''}
            >
              {className}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default CharacterClasses
import React, { useState, useEffect } from 'react';

const Skills = ({ skillsList, attributeModifiers }) => {
  const [skillPoints, setSkillPoints] = useState(0);
  const [skillValues, setSkillValues] = useState({});

  useEffect(() => {
    // Calculate the total skill points based on Intelligence Modifier
    const intelligenceModifier = attributeModifiers['Intelligence'];
    const totalPoints = 10 + 4 * intelligenceModifier;
    setSkillPoints(totalPoints);
  }, [attributeModifiers]);

  const incrementSkill = (skill) => {
    if (skillPoints > 0) {
      setSkillPoints(skillPoints - 1);
      setSkillValues({
        ...skillValues,
        [skill.name]: skillValues[skill.name] ? skillValues[skill.name] + 1 : 1,
      });
    }
  };

  const decrementSkill = (skill) => {
    if (skillValues[skill.name] > 0) {
      setSkillPoints(skillPoints + 1);
      setSkillValues({
        ...skillValues,
        [skill.name]: skillValues[skill.name] - 1,
      });
    }
  };

  return (
    <div id="skills">
      <h2>Skills</h2>
      <p>Available Skill Points: {skillPoints}</p>
      <div>
        {skillsList.map((skill) => (
          <div key={skill.name}>
            {skill.name} - points: {skillValues[skill.name] || 0}
            <button onClick={() => incrementSkill(skill)}>[+]</button>
            <button onClick={() => decrementSkill(skill)}>[-]</button>
            modifier ({skill.attributeModifier}): {attributeModifiers[skill.attributeModifier]}
            total: {(skillValues[skill.name] || 0) + attributeModifiers[skill.attributeModifier]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

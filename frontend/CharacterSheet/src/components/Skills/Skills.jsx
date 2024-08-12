/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styles from './skills.module.css';

export function Skills({ character, isEditando, onUpdatecharacterField }) {
  const [skillsEditaveis, setSkillsEditaveis] = useState([]);
  const [novaSkill, setNovaSkill] = useState({ type: '', name: '', level: '', description: '' });

  useEffect(() => {
    if (character && Array.isArray(character.skills)) {
      setSkillsEditaveis(character.skills);
    }
  }, [character]);

  const handleAddSkill = () => {
    const updatedSkills = [...skillsEditaveis, novaSkill];
    setSkillsEditaveis(updatedSkills);
    setNovaSkill({ type: '', name: '', level: '', description: '' });
    onUpdatecharacterField('skills', updatedSkills);
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = skillsEditaveis.filter((_, i) => i !== index);
    setSkillsEditaveis(updatedSkills);
    onUpdatecharacterField('skills', updatedSkills);
  };

  if (!character) {
    return (
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.titulo}>Skills</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.titulo}>Skills</th>
          </tr>
        </thead>
      </table>
      {skillsEditaveis.length > 0 ? (
        skillsEditaveis.map((skill, index) => (
          <table key={index} className={styles.table}>
            <thead>
              <tr>
                <th>{skill.type}</th>
                <th>{skill.name}</th>
                <th>LV. {skill.level}</th>
              </tr>
              <tr>
                <td colSpan="3">{skill.description}</td>
              </tr>
            </thead>
            {isEditando && (
              <tfoot>
                <tr>
                  <td>
                    <button onClick={() => handleRemoveSkill(index)}>Remover</button>
                  </td>
                </tr>
              </tfoot>
            )}
          </table>
        ))
      ) : (
        <p></p>
      )}
      {isEditando && (
        <div className={styles.novaSkill}>
          <input
            type="text"
            placeholder="Tipo"
            value={novaSkill.type}
            onChange={(e) => setNovaSkill({ ...novaSkill, type: e.target.value })}
          />
          <input
            type="text"
            placeholder="Nome"
            value={novaSkill.name}
            onChange={(e) => setNovaSkill({ ...novaSkill, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Level"
            value={novaSkill.level}
            onChange={(e) => setNovaSkill({ ...novaSkill, level: e.target.value })}
          />
          <textarea
            placeholder="Descrição"
            value={novaSkill.description}
            onChange={(e) => setNovaSkill({ ...novaSkill, description: e.target.value })}
          />
          <button onClick={handleAddSkill}>Adicionar</button>
        </div>
      )}
    </div>
  );
}

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import styles from './basic.module.css'

export function Basic({ character, isEditando, onUpdatecharacterField }) {
  const [characterEditavel, setcharacterEditavel] = useState({});

  useEffect(() => {
    if (character) {
      setcharacterEditavel(character);
    }
  }, [character]);

  const handleChange = (field, value) => {
    setcharacterEditavel({
      ...characterEditavel,
      [field]: value,
    });
    onUpdatecharacterField(field, value);
  };
    if (!character) {
        return (
          <div className={styles.grid}>
            <img src='' alt='Falha ao carregar imagem' />
            <table className={styles.grid}>
              <tbody className={styles.teste}>
                <tr>
                  <th>Name:</th>
                  <td></td>
                  <th>Age:</th>
                  <td></td>
                </tr>
                <tr>
                  <th>Species:</th>
                  <td></td>
                  <th>Level:</th>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

  return (
    <div className={styles.grid}>
      {isEditando ? (
        <input
          type="text"
          value={characterEditavel.image || ''}
          onChange={(e) => handleChange('image', e.target.value)}
          />
      ) : (
        <img src={characterEditavel.image || ''} alt='Falha ao carregar imagem' />
      )}      
      <table className={styles.grid}>
        <tbody className={styles.teste}>
          <tr>
            <th>Name:</th>
            <td>
              {isEditando ? (
                <input
                type="text"
                value={characterEditavel.name || ''}
                onChange={(e) => handleChange ('name', e.target.value)}
              />
              ) : (
                character.name
              )}
            </td>
            <th>Age:</th>
            <td>
            {isEditando ? (
                <input
                type="number"
                value={characterEditavel.age || ''}
                onChange={(e) => handleChange ('age', e.target.value)}
              />
              ) : (
                character.age
              )}
            </td>
          </tr>
          <tr>
            <th>Species:</th>
            <td>
            {isEditando ? (
                <input
                type="text"
                value={characterEditavel.species || ''}
                onChange={(e) => handleChange ('species', e.target.value)}
              />
              ) : (
                character.species
              )}
            </td>
            <th>Level:</th>
            <td>
            {isEditando ? (
                <input
                type="number"
                value={characterEditavel.level || ''}
                onChange={(e) => handleChange ('level', e.target.value)}
              />
              ) : (
                character.level
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
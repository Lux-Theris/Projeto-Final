/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Separator } from '../Separator/Separator'
import styles from './status.module.css'

export function Status({ character, isEditando, onUpdatecharacterField }){
  const [characterEditavel, setcharacterEditavel] = useState({});

  useEffect(() => {
    if (character) {
      setcharacterEditavel(character);
    }
  }, [character]);

    const handleChange = (field, value) => {
      setcharacterEditavel(prevSate => ({
        ...prevSate,
        [field]: value,
      }));
      onUpdatecharacterField(field, value);
    };

    const calculateModifier = (value) => {
      const intValue = parseInt(value, 10);
      if (isNaN(intValue)) return 'N/A';
    
      const quotient = Math.floor(intValue / 3);
      const dice = Math.floor(quotient / 10);
      const additional = quotient % 10;
    
      if (dice > 0) {
        return `+${dice}D${additional > 0 ? ` +${additional}` : ''}`;
      } else {
        return `+${additional}`;
      }
    };

    if(!character) {
      return(
        <div>
        <table className={styles.grid}>
          <thead>
            <tr>
              <th>Status:</th>
              <td></td>
            </tr>
            <tr>
              <th>HP:</th>
              <td></td>
            </tr>
            <tr>
              <th>MP:</th>
              <td></td>
            </tr>
          </thead>
        </table>
        <Separator />
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Strenght:</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>Defense:</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>Magic:</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>Magical Defense:</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>Dexterity:</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>Stealth:</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>Precision:</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        </table>
        </div>
      )
    }
  return(
    <div>
    <table className={styles.grid}>
      <thead>
        <tr>
          <th>Status:</th>
          <td>
          {isEditando ? (
                <input
                type="text"
                value={characterEditavel.status || ''}
                onChange={(e) => handleChange ('status', e.target.value)}
              />
              ) : (
                character.status
              )}
          </td>
        </tr>
        <tr>
          <th>HP:</th>
          <td>
          {isEditando ? (
                <input
                type="number"
                value={characterEditavel.hp || ''}
                onChange={(e) => handleChange ('hp', e.target.value)}
              />
              ) : (
                character.hp
              )}
          </td>
        </tr>
        <tr>
          <th>MP:</th>
          <td>
          {isEditando ? (
                <input
                type="number"
                value={characterEditavel.mp || ''}
                onChange={(e) => handleChange ('mp', e.target.value)}
              />
              ) : (
                character.hp
              )}
          </td>
        </tr>
      </thead>
    </table>
    <Separator />
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Strenght:</th>
          <th>
          {isEditando ? (
                <input
                type="number"
                value={characterEditavel.strenght || ''}
                onChange={(e) => handleChange ('strenght', e.target.value)}
              />
              ) : (
                character.strenght
              )}
          </th>
          <th>
            {calculateModifier(character.strenght || 0)}
          </th>
        </tr>
        <tr>
          <th>Defense:</th>
          <th>
          {isEditando ? (
                <input
                type="number"
                value={characterEditavel.defense || ''}
                onChange={(e) => handleChange ('defense', e.target.value)}
              />
              ) : (
                character.defense
              )}
          </th>
          <th>
            {calculateModifier(character.defense)}
          </th>
        </tr>
        <tr>
          <th>Magic:</th>
          <th>
          {isEditando ? (
                <input
                type="number"
                value={characterEditavel.magic || ''}
                onChange={(e) => handleChange ('magic', e.target.value)}
              />
              ) : (
                character.magic
              )}
          </th>
          <th>
           {calculateModifier(character.magic)}
          </th>
        </tr>
        <tr>
          <th>Magical Defense:</th>
          <th>
          {isEditando ? (
                <input
                type="number"
                value={characterEditavel.mDefense || ''}
                onChange={(e) => handleChange ('mDefense', e.target.value)}
              />
              ) : (
                character.mDefense
              )}
          </th>
          <th>
          {calculateModifier(character.mDefense)}
          </th>
        </tr>
        <tr>
          <th>Dexterity:</th>
          <th>
          {isEditando ? (
                <input
                type="number"
                value={characterEditavel.dexterity || ''}
                onChange={(e) => handleChange ('dexterity', e.target.value)}
              />
              ) : (
                character.dexterity
              )}
          </th>
          <th>
          {calculateModifier(character.dexterity)}
          </th>
        </tr>
        <tr>
          <th>Stealth:</th>
          <th>
          {isEditando ? (
                <input
                type="number"
                value={characterEditavel.stealth || ''}
                onChange={(e) => handleChange ('stealth', e.target.value)}
              />
              ) : (
                character.stealth
              )}
          </th>
          <th>
          {calculateModifier(character.stealth)}
          </th>
        </tr>
        <tr>
          <th>Precision:</th>
          <th>
          {isEditando ? (
                <input
                type="number"
                value={characterEditavel.precision || ''}
                onChange={(e) => handleChange ('precision', e.target.value)}
              />
              ) : (
                character.precision
              )}
          </th>
          <th>
          {calculateModifier(character.precision)}
          </th>
        </tr>
      </thead>
    </table>
    </div>
  )
}
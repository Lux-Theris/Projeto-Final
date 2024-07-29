import React, { useState } from 'react';
import styles from './header.module.css';

export function Header({ characters, onSelectedCharacter }) {
  const [newCharacterName, setNewCharacterName] = useState('');

  const handleSelectedCharacter = (event) => {
    const selectedCharacter = JSON.parse(event.target.value);
    onSelectedCharacter(selectedCharacter);
  };

  const handleCreateCharacter = async () => {
    const newCharacter = {
      name: newCharacterName,
      species: '',
      age: 0,
      level: 1,
      money: 0,
      status: '',
      hp: 0,
      mp: 0,
      strength: 0,
      defense: 0,
      magic: 0,
      mDefense: 0,
      dexterity: 0,
      stealth: 0,
      precision: 0,
      skills: [],
      inventories: [],
      titles: []
    };

    try {
      const response = await fetch(`${import.meta.env.REACT_APP_API_URL}/sheet`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCharacter),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      onSelectedCharacter(data);
      setNewCharacterName('');
    } catch (error) {
      console.error('Erro criando personagem:', error);
    }
  };

  return (
    <header className={styles.header}>
      <strong>Selecione ou Crie um Personagem</strong>
      <select onChange={handleSelectedCharacter}>
        <option value="">Selecione um personagem</option>
        {characters.map(character => (
          <option key={character.id} value={JSON.stringify(character)}>
            {character.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={newCharacterName}
        onChange={(e) => setNewCharacterName(e.target.value)}
        placeholder="Nome do novo personagem"
      />
      <button onClick={handleCreateCharacter}>Criar Novo Personagem</button>
    </header>
  );
}

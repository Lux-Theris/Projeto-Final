/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import { Basic } from './components/Basic/Basic';
import { Header } from './components/Header/Header';
import { Money } from './components/Money/Money';
import { Separator } from './components/Separator/Separator';
import { Status } from './components/Status/Status';
import { Titles } from './components/Titles/Titles';
import { Inventory } from './components/Inventory/Inventory';
import { Skills } from './components/Skills/Skills';

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`http://localhost:5151/api/sheet`);
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error('Erro pegando ficha:', error);
      }
    };

    fetchCharacters();
  }, []);
  
  const handleSelectedCharacter = (character) => {
    setSelectedCharacter(character);
  };

  const handleCreateCharacter = async (newCharacter) => {
    try {
      const response = await fetch(`http://localhost:5151/api/sheet`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCharacter)
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}`);
      }

      const createdCharacter = await response.json();
      console.log('Ficha criada:', createdCharacter);
      setCharacters(prevCharacters => [...prevCharacters, createdCharacter]);
      setSelectedCharacter(createdCharacter);
    } catch (error) {
      console.error('Erro criando personagem:', error);
    }
  };

  const handleUpdateCharacter = async (character) => {
    try {
      await fetch(`http://localhost:5151/api/sheet/${character.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(character)
      });
      setCharacters(prevCharacters =>
        prevCharacters.map(c => (c.id === character.id ? character : c))
      );
      setSelectedCharacter(character);
    } catch (error) {
      console.error('Erro atualizando personagem: ', error);
    }
  };

  return (
    <div className={styles.Overall}>
      <Header 
        characters={characters} 
        onSelectedCharacter={handleSelectedCharacter} 
        onCreateCharacter={handleCreateCharacter}
        onUpdateCharacter={handleUpdateCharacter} 
      />
      <main>
        <div className={styles.Left}>
          <Basic character={selectedCharacter} />
          <Separator />
          <Status character={selectedCharacter} />
          <Separator />
          <Money character={selectedCharacter} />
        </div>
        <div className={styles.Center}>
          <Titles character={selectedCharacter} />
          <Separator />
          <Inventory character={selectedCharacter} />
        </div>
        <div className={styles.Right}>
          <Skills character={selectedCharacter} />
        </div>
      </main>
    </div>
  );
}

export default App;

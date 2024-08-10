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
  const [isEditando, setIsEditando] = useState(false);
  const [editedCharacter, setEditedCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`https://fsc-projeto-final-gtemb0bpbza8b7ah.eastus2-01.azurewebsites.net/api/sheet`);
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
    setEditedCharacter(character);
    setIsEditando(false);
  };

  const handleCreateCharacter = async (newCharacter) => {
    try {
      const response = await fetch(`https://fsc-projeto-final-gtemb0bpbza8b7ah.eastus2-01.azurewebsites.net/api/sheet`, {
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
      setEditedCharacter(createdCharacter);
      setIsEditando(false);
    } catch (error) {
      console.error('Erro criando personagem:', error);
    }
  };

  const handleUpdateCharacter = async (character) => {
    try {
      await fetch(`https://fsc-projeto-final-gtemb0bpbza8b7ah.eastus2-01.azurewebsites.net/api/sheet/${character.id}`, {
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
      setEditedCharacter(character);
      setIsEditando(false);
    } catch (error) {
      console.error('Erro atualizando personagem: ', error);
    }
  };

  const handleUpdateCharacterField = (field, value) => {
    setEditedCharacter(prevCharacters => ({ ...prevCharacters, [field]: value}));
  };

  const handleDeleteCharacter = async (characterId) => {
    try {
      await fetch(`https://fsc-projeto-final-gtemb0bpbza8b7ah.eastus2-01.azurewebsites.net/api/sheet/${characterId}`, {
        method: 'DELETE'
      });
      setCharacters(prevCharacters =>
        prevCharacters.filter(c => c.id !== characterId)
      );
      setSelectedCharacter(null);
    } catch (error) {
      console.error('Erro deletando personagem:', error);
    }
  };

  const handleEditarPersonagem = () => {
    setIsEditando(true);
  };

  const handleSalvarPersonagem = () => {
    if (editedCharacter) {
      handleUpdateCharacter(editedCharacter);
    }
  };

  console.log('Original: ', selectedCharacter);
  console.log('Alterado: ', editedCharacter);
  
  return (
    <div className={styles.Overall}>
      <Header 
        characters={characters} 
        onSelectedCharacter={handleSelectedCharacter} 
        onCreateCharacter={handleCreateCharacter}
        onUpdateCharacter={handleUpdateCharacter} 
        onDeleteCharacter={handleDeleteCharacter}
        onEditarPersonagem={handleEditarPersonagem}
        onSalvarPersonagem={handleSalvarPersonagem}
        isEditando={isEditando}
        selectedCharacter={selectedCharacter}
      />
      <main>
        <div className={styles.Left}>
          <Basic 
            character={editedCharacter} 
            isEditando={isEditando}
            onUpdatecharacterField={handleUpdateCharacterField}
          />
          <Separator />
          <Status
            character={editedCharacter} 
            isEditando={isEditando}
            onUpdatecharacterField={handleUpdateCharacterField}
          />
          <Separator />
          <Money
            character={editedCharacter} 
            isEditando={isEditando}
            onUpdatecharacterField={handleUpdateCharacterField}
          />
        </div>
        <div className={styles.Center}>
          <Titles
            character={editedCharacter} 
            isEditando={isEditando}
            onUpdatecharacterField={handleUpdateCharacterField} 
           />
          <Separator />
          <Inventory
            character={editedCharacter} 
            isEditando={isEditando}
            onUpdatecharacterField={handleUpdateCharacterField} 
          />
        </div>
        <div className={styles.Right}>
          <Skills 
            character={editedCharacter} 
            isEditando={isEditando}
            onUpdatecharacterField={handleUpdateCharacterField} 
          />
        </div>
      </main>
    </div>
  );
}

export default App;

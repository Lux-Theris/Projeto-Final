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
        const response = await fetch(`${import.meta.env.VITE_API_URL}/sheet`);
        
        // Verifica o status da resposta
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        // Lê a resposta como texto
        const text = await response.text();
        console.log('Resposta bruta da API:', text);

        // Tenta analisar o texto como JSON
        try {
          const data = JSON.parse(text);
          console.log('Resposta da API como JSON:', data);
          setCharacters(data);
        } catch (jsonError) {
          console.error('Erro ao analisar JSON:', jsonError);
        }

      } catch (error) {
        console.error('Erro pegando ficha:', error);
      }
    };


    fetchCharacters();
  }, []);
  const handleSelectedCharacter = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className={styles.Overall}>
      <Header characters={characters} onSelectedCharacter={handleSelectedCharacter} />
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

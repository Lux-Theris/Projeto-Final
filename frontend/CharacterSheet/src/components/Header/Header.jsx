/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styles from './header.module.css';
import { ModalH } from '../Modal Header/ModalH';

export function Header({ characters, onSelectedCharacter, onCreateCharacter, onUpdateCharacter }) {
  const [newCharacterName, setNewCharacterName] = useState('');
  const [showConfirmacaoCriacao, setShowConfirmacaoCriacao] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editandoPersonagem, setEditandoPersonagem] = useState(null);

  const handleSelectCharacter = (e) => {
    const value = e.target.value;

    if(value === 'criar-novo') {
      setShowConfirmacaoCriacao(true);
      setIsEditing(false);
      setEditandoPersonagem(null);
    } else {
      const character = JSON.parse(value);
      onSelectedCharacter(character);
      setEditandoPersonagem(character);
      setIsEditing(false);
    }
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
      await onCreateCharacter(newCharacter);
      setNewCharacterName('');
      setShowConfirmacaoCriacao(false);
    } catch (error) {
      console.error('Erro criando personagem:', error);
    }
  };

  const handleCancelarCriacao = () => {
    setNewCharacterName('');
    setShowConfirmacaoCriacao(false);
    document.querySelector('select').value = '';
  }

  const handleSaveChanges = async () => {
    if (editandoPersonagem) {
      try {
        await onUpdateCharacter(editandoPersonagem);
        setIsEditing(false);
        setEditandoPersonagem(null);
      } catch (error) {
        console.error('Erro ao atualizar o personagem: ', error);
      }
    }
  }

  return (
    <header className={styles.header}>
      <strong>Selecione ou Crie um Personagem</strong>
      <select onChange={handleSelectCharacter}>
        <option value="">Selecione um personagem</option>
        {characters.map(character => (
          <option key={character.id} value={JSON.stringify(character)}>
            {character.name}
          </option>
        ))}
        <option value="criar-novo">Criar um novo personagem</option>
      </select>
      {editandoPersonagem && !isEditing && (
        <button onClick={() => setIsEditing(true)}>Alterar</button>
      )}
      {isEditing && (
        <button onClick={handleSaveChanges}>Salvar</button>
      )}
      <ModalH
        isOpen={showConfirmacaoCriacao}
        onClose={handleCancelarCriacao}
        onConfirm={handleCreateCharacter}
        newCharacterName={newCharacterName}
        setNewCharacterName={setNewCharacterName}
      />
  </header>
  );
}

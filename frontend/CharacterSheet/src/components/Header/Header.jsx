/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styles from './header.module.css';
import { ModalH } from '../Modal Header/ModalH';
import { ModalDH } from '../Modal Header/ModalDH';

export function Header({ characters, onSelectedCharacter, onCreateCharacter, onUpdateCharacter, onDeleteCharacter, onEditarPersonagem, onSalvarPersonagem, isEditando, selectedCharacter }) {
  const [newCharacterName, setNewCharacterName] = useState('');
  const [showConfirmacaoCriacao, setShowConfirmacaoCriacao] = useState(false);
  const [showConfirmacaoDelete, setShowConfirmacaoDelete] = useState(false);

  const handleSelectCharacter = (e) => {
    const value = e.target.value;

    if(value === 'criar-novo') {
      setShowConfirmacaoCriacao(true);
    } else {
      try {
      const character = JSON.parse(value);
      onSelectedCharacter(character);
      } catch (error){
        console.error('Erro ao fazer parse do Json, você tentou selecionar nada?', error);
        onSelectedCharacter(null);
      }
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

  const handleDeletePersonagem = async () => {
    if (selectedCharacter) {
      try {
        await onDeleteCharacter(selectedCharacter.id);
        onSelectedCharacter(null);
        setShowConfirmacaoDelete(false);
      } catch (error) {
        console.error('Erro deletando o personagem: ', error);
      }
    }
  }

  const shouldShowAlterarButton = selectedCharacter && selectedCharacter.id && !isEditando;

  return (
    <header className={styles.header}>
      <strong>Selecione ou Crie um Personagem</strong>
      <select onChange={handleSelectCharacter} value={onSelectedCharacter ? JSON.stringify(onSelectedCharacter) : ''}>
        <option value="">Selecione um personagem</option>
        {characters.map(character => (
          <option key={character.id} value={JSON.stringify(character)}>
            {character.name}
          </option>
        ))}
        <option value="criar-novo">Criar um novo personagem</option>
      </select>
      {shouldShowAlterarButton && (
        <button onClick={onEditarPersonagem}>Alterar</button>
      )}
      {isEditando && (
        <>
        <button onClick={onSalvarPersonagem}>Salvar</button>
        <button className={styles.deletar} onClick={() => setShowConfirmacaoDelete(true)}>Apagar</button>
        </>
      )}
      <ModalH
        isOpen={showConfirmacaoCriacao}
        onClose={handleCancelarCriacao}
        onConfirm={handleCreateCharacter}
        newCharacterName={newCharacterName}
        setNewCharacterName={setNewCharacterName}
      />
      <ModalDH
        isOpen={showConfirmacaoDelete}
        onClose={() => setShowConfirmacaoDelete(false)}
        onConfirm={handleDeletePersonagem}
        charactername={selectedCharacter ? selectedCharacter.name : ''}
      />
  </header>
  );
}

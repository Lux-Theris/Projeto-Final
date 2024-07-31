/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from './modal.module.css'

export function ModalH({ isOpen, onClose, onConfirm, newCharacterName, setNewCharacterName }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalFundo}>
      <div className={styles.modalContent}>
        <h2>Criar Novo Personagem</h2>
        <input
          type="text"
          value={newCharacterName}
          onChange={(e) => setNewCharacterName(e.target.value)}
          placeholder="Nome do novo personagem"
        />
        <div className={styles.modalButtons}>
        <button onClick={onConfirm}>Criar</button>
        <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}
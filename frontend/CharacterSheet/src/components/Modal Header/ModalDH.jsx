/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from './modal.module.css'

export function ModalDH({ isOpen, onClose, onConfirm, charactername }) {
    if (!isOpen) return null;

    return (
      <div className={styles.modalFundo}>
        <div className={styles.modalContent2}>
          <h2>Confirmar Exclusão</h2>
          <p>Você está prestes a excluir a ficha de {charactername}. Isto é uma ação irreversível</p>
          <p>Tem certeza que deseja continuar?</p>
          <div className={styles.modalButtons}>
            <button onClick={onClose}>Cancelar</button>
            <button className={styles.botaodelete} onClick={onConfirm}>Excluir</button>
          </div>
        </div>
      </div>
    )
}
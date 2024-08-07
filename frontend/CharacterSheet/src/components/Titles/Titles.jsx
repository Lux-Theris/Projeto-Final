/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styles from "./titles.module.css";

export function Titles({ character, isEditando, onUpdatecharacterField }) {
  const [tituloEditavel, setTituloEditavel] = useState([]);
  const [novoTitulo, setNovoTitulo] = useState({ name: '', description: '' });

  useEffect(() => {
    if (character && Array.isArray(character.titles)) {
      setTituloEditavel(character.titles);
    }
  }, [character]);

  const handleAddTitulo = () => {
    const updatedTitulos = [...tituloEditavel, novoTitulo];
    setTituloEditavel(updatedTitulos);
    setNovoTitulo({ name: '', description: '' });
    onUpdatecharacterField('titles', updatedTitulos);
  };

  const handleRemoveTitulo = (index) => {
    const updatedTitulos = tituloEditavel.filter((_, i) => i !== index);
    setTituloEditavel(updatedTitulos);
    onUpdatecharacterField('titles', updatedTitulos);
  };

  if (!character) {
    return (
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.titulo}>Titles</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.titulo}>Titles</th>
          </tr>
        </thead>
      </table>
      {tituloEditavel.length > 0 ? (
        tituloEditavel.map((title, index) => (
          <table key={index} className={styles.table}>
            <thead>
              <tr>
                <th>{title.name}</th>
              </tr>
              <tr>
                <th>{title.description}</th>
              </tr>
            </thead>
            {isEditando && (
              <tfoot>
                <tr>
                  <td>
                    <button onClick={() => handleRemoveTitulo(index)}>Remover</button>
                  </td>
                </tr>
              </tfoot>
            )}
          </table>
        ))
      ) : (
        <p />
      )}
      {isEditando && (
        <div className={styles.novotitulo}>
          <input
            type="text"
            placeholder="Nome"
            value={novoTitulo.name}
            onChange={(e) => setNovoTitulo({ ...novoTitulo, name: e.target.value })}
          />
          <textarea
            placeholder="Descrição"
            value={novoTitulo.description}
            onChange={(e) => setNovoTitulo({ ...novoTitulo, description: e.target.value })}
          />
          <button onClick={handleAddTitulo}>Adicionar</button>
        </div>
      )}
    </div>
  );
}

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import styles from './inventory.module.css'

export function Inventory({ character, isEditando, onUpdatecharacterField, onSaveChanges }){
  const [inventarioEditavel, setInventarioEditavel] = useState([]);
  const [novoItem, setNovoItem] = useState({ name: '', description: '' });

  useEffect(() => {
    if (character && Array.isArray(character.inventory)){
      setInventarioEditavel(character.inventory);
    }
  }, [character]);

  const handleAddItem = () => {
    const updatedInventario = [...inventarioEditavel, novoItem];
    setInventarioEditavel(updatedInventario);
    setNovoItem({ name: '', description: ''});
    onUpdatecharacterField('inventories', updatedInventario);
  };

  const handleRemoveItem = (index) => {
    const updatedInventario = inventarioEditavel.filter((_, i) => i !== index);
    setInventarioEditavel(updatedInventario);
    onUpdatecharacterField('inventories', updatedInventario);
  };

  const handleSaveChanges = () => {
    onUpdatecharacterField('inventories', inventarioEditavel);
    onSaveChanges();
  }

  if (!character) {
    return(
      <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.titulo}>Inventory</th>
          </tr>
        </thead>
      </table>
    </div>
    )
  }
  return(
      <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.titulo}>Inventory</th>
          </tr>
        </thead>
      </table>
      {inventarioEditavel.length > 0 ? (
        inventarioEditavel.map((item, index) => (
        <table key={index} className={styles.table}>
          <thead>
            <tr>
              <th>{item.name}</th>
            </tr>
            <tr>
              <th>{item.description}</th>
            </tr>
          </thead>
          {isEditando && (
            <tfoot>
              <tr>
                <td>
                  <button onClick={() => handleRemoveItem(index)}>Remover</button>
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      ))
    ) : (
      <p></p>
    )}
    {isEditando && (
      <div className={styles.novoItem}>
        <input
          type="text"
          placeholder="Nome"
          value={novoItem.name}
          onChange={(e) => setNovoItem({...novoItem, name: e.target.value})}
        />
        <textarea
          placeholder="Descrição"
          value={novoItem.description}
          onChange={(e) => setNovoItem({...novoItem, description: e.target.value})}
        />
        <button onClick={handleAddItem}>Adicionar</button>
      </div>
    )}
    </div>
  )
}
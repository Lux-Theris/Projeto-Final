/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styles from './money.module.css'

const calcularDinheiro = (dinheiro) => {
  const coinToStrip = 50;
  const stripToBar = 2;
  const barToCoin = 10;
  const orichalcumBarToToken = 100;

  const athorisnamorToken = Math.floor(dinheiro / ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * orichalcumBarToToken ));
  dinheiro %= ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * orichalcumBarToToken );

  const orichalcumBar = Math.floor(dinheiro / ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar ));
  dinheiro %= ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar );

  const orichalcumStrip = Math.floor(dinheiro / ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip ));
  dinheiro %= ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip );

  const orichalcumCoin = Math.floor(dinheiro / ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin ));
  dinheiro %= ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin );

  const platinumBar = Math.floor(dinheiro / ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar ));
  dinheiro %= ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar );

  const platinumStrip = Math.floor(dinheiro / ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip ));
  dinheiro %= ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip );

  const platinumCoin = Math.floor(dinheiro / ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin ));
  dinheiro %= ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin );

  const goldBar = Math.floor(dinheiro / ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar ));
  dinheiro %= ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar );

  const goldStrip = Math.floor(dinheiro / ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip ));
  dinheiro %= ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip );

  const goldCoin = Math.floor(dinheiro / ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin ));
  dinheiro %= ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin );

  const silverBar = Math.floor(dinheiro / ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar ));
  dinheiro %= ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar );

  const silverStrip = Math.floor(dinheiro / ( coinToStrip * stripToBar * barToCoin * coinToStrip ));
  dinheiro %= ( coinToStrip * stripToBar * barToCoin * coinToStrip );

  const silverCoin = Math.floor(dinheiro / ( coinToStrip * stripToBar * barToCoin ));
  dinheiro %= ( coinToStrip * stripToBar * barToCoin );

  const copperBar = Math.floor(dinheiro / ( coinToStrip * stripToBar ));
  dinheiro %= ( coinToStrip * stripToBar );

  const copperStrip = Math.floor(dinheiro / ( coinToStrip ));
  dinheiro %= ( coinToStrip );

  const copperCoin = dinheiro

  return {
    athorisnamorToken,
    orichalcumBar,
    orichalcumStrip,
    orichalcumCoin,
    platinumBar,
    platinumStrip,
    platinumCoin,
    goldBar,
    goldStrip,
    goldCoin,
    silverBar,
    silverStrip,
    silverCoin,
    copperBar,
    copperStrip,
    copperCoin,
  };
};

const calcularCopperCoinTotal = (amounts) => {
  const coinToStrip = 50;
  const stripToBar = 2;
  const barToCoin = 10;
  const orichalcumBarToToken = 100;
  
  return(
    amounts.athorisnamorToken * ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * orichalcumBarToToken ) +
    amounts.orichalcumBar * ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar ) +
    amounts.orichalcumStrip * ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip ) +
    amounts.orichalcumCoin * ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin ) +
    amounts.platinumBar * ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar ) +
    amounts.platinumStrip * ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip ) +
    amounts.platinumCoin * ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip ) +
    amounts.goldBar * ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar ) +
    amounts.goldStrip * ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin * coinToStrip ) +
    amounts.goldCoin * ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar * barToCoin ) +
    amounts.silverBar * ( coinToStrip * stripToBar * barToCoin * coinToStrip * stripToBar ) +
    amounts.silverStrip * ( coinToStrip * stripToBar * barToCoin * coinToStrip ) +
    amounts.silverCoin * ( coinToStrip * stripToBar * barToCoin ) +
    amounts.copperBar * ( coinToStrip * stripToBar ) +
    amounts.copperStrip * ( coinToStrip ) +
    amounts.copperCoin
  );
};

export function Money({ character, isEditando, onUpdatecharacterField }){
  const [amounts, setAmounts] = useState({});

  useEffect(() => {
    if(character && character.money !== undefined) {
      const totalCalculado = calcularDinheiro(character.money);
      setAmounts(totalCalculado);
    }
  }, [character]);

  const handleChange = (field, value) => {
    const newValue = parseInt(value, 10) || 0;
    const newAmounts = {
      ...amounts,
      [field]: newValue
    };

    setAmounts(newAmounts);

    const newCopperCoin = calcularCopperCoinTotal(newAmounts);
    onUpdatecharacterField('money', newCopperCoin);
  };

  if (!character) {
    return(
      <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.titulo}>dinheiro</th>
          </tr>
        </thead>
      </table>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Athorisnamor Token</th>
            <td></td>
          </tr>
          <tr>
            <th>Orichalcum Bar</th>
            <td></td>
          </tr>
          <tr>
            <th>Orichalcum Strip</th>
            <td></td>
          </tr>
          <tr>
            <th>Orichalcum Coin</th>
            <td></td>
          </tr>
          <tr>
            <th>Platinum Bar</th>
            <td></td>
          </tr>
          <tr>
            <th>Platinum Strip</th>
            <td></td>
          </tr>
          <tr>
            <th>Platinum Coin</th>
            <td></td>
          </tr>
          <tr>
            <th>Gold Bar</th>
            <td></td>
          </tr>
          <tr>
            <th>Gold Strip</th>
            <td></td>
          </tr>
          <tr>
            <th>Gold Coin</th>
            <td></td>
          </tr>
          <tr>
            <th>Silver Bar</th>
            <td></td>
          </tr>
          <tr>
            <th>Silver Strip</th>
            <td></td>
          </tr>
          <tr>
            <th>Silver Coin</th>
            <td></td>
          </tr>
          <tr>
            <th>Copper Bar</th>
            <td></td>
          </tr>
          <tr>
            <th>Copper Strip</th>
            <td></td>
          </tr>
          <tr>
            <th>Copper Coin</th>
            <td></td>
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
            <th className={styles.titulo}>Money</th>
          </tr>
        </thead>
      </table>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Athorisnamor Token</th>
            <td>
              {isEditando ? (
                <input
                type="number"
                value={amounts.athorisnamorToken || 0}
                onChange={(e) => handleChange('athorisnamorToken', e.target.value)}
                />
              ) : (
                amounts.athorisnamorToken
              )}
            </td>
          </tr>
          <tr>
            <th>Orichalcum Bar</th>
            <td>
              {isEditando ? (
                <input
                type="number"
                value={amounts.orichalcumBar || 0}
                onChange={(e) => handleChange('orichalcumBar', e.target.value)}
                />
              ) : (
                amounts.orichalcumBar
              )}
            </td>
          </tr>
          <tr>
            <th>Orichalcum Strip</th>
            <td>
              {isEditando ? (
                <input
                type="number"
                value={amounts.orichalcumStrip || 0}
                onChange={(e) => handleChange('orichalcumStrip', e.target.value)}
                />
              ) : (
                amounts.orichalcumStrip
              )}
            </td>
          </tr>
          <tr>
            <th>Orichalcum Coin</th>
            <td>
              {isEditando ? (
                <input
                type="number"
                value={amounts.orichalcumCoin || 0}
                onChange={(e) => handleChange('orichalcumCoin', e.target.value)}
                />
              ) : (
                amounts.orichalcumCoin
              )}
            </td>
          </tr>
          <tr>
            <th>Platinum Bar</th>
            <td>
              {isEditando ? (
                <input
                type="number"
                value={amounts.platinumBar || 0}
                onChange={(e) => handleChange('platinumBar', e.target.value)}
                />
              ) : (
                amounts.platinumBar
              )}
            </td>
          </tr>
          <tr>
            <th>Platinum Strip</th>
            <td>
              {isEditando ? (
                <input
                type="number"
                value={amounts.platinumStrip || 0}
                onChange={(e) => handleChange('platinumStrip', e.target.value)}
                />
              ) : (
                amounts.platinumStrip
              )}
            </td>
          </tr>
          <tr>
            <th>Platinum Coin</th>
            <td>
              {isEditando ? (
                <input
                type="number"
                value={amounts.platinumCoin || 0}
                onChange={(e) => handleChange('platinumCoin', e.target.value)}
                />
              ) : (
                amounts.platinumCoin
              )}
            </td>
          </tr>
          <tr>
            <th>Gold Bar</th>
            <td>
              {isEditando ? (
                <input
                type="number"
                value={amounts.goldBar || 0}
                onChange={(e) => handleChange('goldBar', e.target.value)}
                />
              ) : (
                amounts.goldBar
              )}
            </td>
          </tr>
          <tr>
            <th>Gold Strip</th>
            <td>
              {isEditando ? (
                <input
                type="number"
                value={amounts.goldStrip || 0}
                onChange={(e) => handleChange('goldStrip', e.target.value)}
                />
              ) : (
                amounts.goldStrip
              )}
            </td>
          </tr>
          <tr>
            <th>Gold Coin</th>
            <td>
              {isEditando ? (
                <input
                type="number"
                value={amounts.goldCoin || 0}
                onChange={(e) => handleChange('goldCoin', e.target.value)}
                />
              ) : (
                amounts.goldCoin
              )}
            </td>
          </tr>
          <tr>
            <th>Silver Bar</th>
            <td>
              {isEditando ? (
                <input
                type="number"
                value={amounts.silverBar || 0}
                onChange={(e) => handleChange('silverBar', e.target.value)}
                />
              ) : (
                amounts.silverBar
              )}
            </td>
          </tr>
          <tr>
            <th>Silver Strip</th>
            <td>
              {isEditando ? (
                <input
                type="number"
                value={amounts.silverStrip || 0}
                onChange={(e) => handleChange('silverStrip', e.target.value)}
                />
              ) : (
                amounts.silverStrip
              )}
            </td>
          </tr>
          <tr>
            <th>Silver Coin</th>
            <td>
              {isEditando ? (
                <input
                type="number"
                value={amounts.silverCoin || 0}
                onChange={(e) => handleChange('silverCoin', e.target.value)}
                />
              ) : (
                amounts.silverCoin
              )}
            </td>
          </tr>
          <tr>
            <th>Copper Bar</th>
            <td>
              {isEditando ? (
                <input
                type="number"
                value={amounts.copperBar || 0}
                onChange={(e) => handleChange('copperBar', e.target.value)}
                />
              ) : (
                amounts.copperBar
              )}
            </td>
          </tr>
          <tr>
            <th>Copper Strip</th>
            <td>
              {isEditando ? (
                <input
                type="number"
                value={amounts.copperStrip || 0}
                onChange={(e) => handleChange('copperStrip', e.target.value)}
                />
              ) : (
                amounts.copperStrip
              )}
            </td>
          </tr>
          <tr>
            <th>Copper Coin</th>
            <td>
              {isEditando ? (
                <input
                type="number"
                value={amounts.copperCoin || 0}
                onChange={(e) => handleChange('copperCoin', e.target.value)}
                />
              ) : (
                amounts.copperCoin
              )}
            </td>
          </tr>
        </thead>
      </table>
    </div>
  )
}
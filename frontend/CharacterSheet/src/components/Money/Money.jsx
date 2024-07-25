import styles from './money.module.css'

export function Money(){
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
            <td>AMOUNT</td>
          </tr>
          <tr>
            <th>Orichalcum Bar</th>
            <td>AMOUNT</td>
          </tr>
          <tr>
            <th>Orichalcum Strip</th>
            <td>AMOUNT</td>
          </tr>
          <tr>
            <th>Orichalcum Coin</th>
            <td>AMOUNT</td>
          </tr>
          <tr>
            <th>Platinum Bar</th>
            <td>AMOUNT</td>
          </tr>
          <tr>
            <th>Platinum Strip</th>
            <td>AMOUNT</td>
          </tr>
          <tr>
            <th>Platinum Coin</th>
            <td>AMOUNT</td>
          </tr>
          <tr>
            <th>Gold Bar</th>
            <td>AMOUNT</td>
          </tr>
          <tr>
            <th>Gold Strip</th>
            <td>AMOUNT</td>
          </tr>
          <tr>
            <th>Gold Coin</th>
            <td>AMOUNT</td>
          </tr>
          <tr>
            <th>Silver Bar</th>
            <td>AMOUNT</td>
          </tr>
          <tr>
            <th>Silver Strip</th>
            <td>AMOUNT</td>
          </tr>
          <tr>
            <th>Silver Coin</th>
            <td>AMOUNT</td>
          </tr>
          <tr>
            <th>Copper Bar</th>
            <td>AMOUNT</td>
          </tr>
          <tr>
            <th>Copper Strip</th>
            <td>AMOUNT</td>
          </tr>
          <tr>
            <th>Copper Coin</th>
            <td>AMOUNT</td>
          </tr>
        </thead>
      </table>
    </div>
  )
}
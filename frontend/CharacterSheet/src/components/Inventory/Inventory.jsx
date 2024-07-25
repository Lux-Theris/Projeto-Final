import styles from './inventory.module.css'

export function Inventory(){
  return(
      <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.titulo}>Inventory</th>
          </tr>
        </thead>
      </table>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome Aqui</th>
          </tr>
          <tr>
            <th>DESCRIÇÃO AQUI</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}
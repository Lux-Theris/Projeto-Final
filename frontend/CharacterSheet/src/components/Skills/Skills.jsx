  import styles from './skills.module.css'

  export function Skills(){
    return(
      <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.titulo}>Skills</th>
          </tr>
        </thead>
      </table>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Tipo Aqui</th>
            <th>Nome Aqui</th>
            <th>Level Aqui</th>
          </tr>
          <tr>
            <td colSpan="3">DESCRIÇÃO AQUI</td>
          </tr>
        </thead>
      </table>
    </div>
    )
  }
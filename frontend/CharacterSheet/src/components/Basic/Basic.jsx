import styles from './basic.module.css'

export function Basic() {
  return (
    <div className={styles.grid}>
      <img src='' alt='IMAGEM DE PERSONAGEM AQUI' />
      <table className={styles.grid}>
        <tbody className={styles.teste}>
          <tr>
            <th>Name:</th>
            <td>Nome Aqui</td>
            <th>Age:</th>
            <td>Idade Aqui</td>
          </tr>
          <tr>
            <th>Species:</th>
            <td>ESPECIE AQUI</td>
            <th>Level:</th>
            <td>NÍVEL AQUI</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
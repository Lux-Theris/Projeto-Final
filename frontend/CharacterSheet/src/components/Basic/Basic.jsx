import styles from './basic.module.css'

export function Basic() {
  return (
    <div>
      <img src='' alt='IMAGEM DE PERSONAGEM AQUI' />
      <div className={styles.grid}>
        <p>Name: NOME AQUI</p>
        <p>Age: IDADE AQUI</p>
        <p>Species: ESPÉCIE AQUI</p>
        <p>Level: LEVEL AQUI</p>
      </div>
    </div>
  )
}
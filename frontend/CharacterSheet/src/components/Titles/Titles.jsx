import styles from "./titles.module.css";

export function Titles() {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.titulo}>Titles</th>
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
  );
}

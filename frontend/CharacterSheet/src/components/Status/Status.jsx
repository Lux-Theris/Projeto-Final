import { Separator } from '../Separator/Separator'
import styles from './status.module.css'

export function Status(){
  return(
    <div>
    <table className={styles.grid}>
      <thead>
        <tr>
          <th>Status:</th>
          <td>STATUS AQUI</td>
        </tr>
        <tr>
          <th>HP:</th>
          <td>HP AQUI</td>
        </tr>
        <tr>
          <th>MP:</th>
          <td>MP AQUI</td>
        </tr>
      </thead>
    </table>
    <Separator />
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Strenght:</th>
          <th>PONTOS AQUI</th>
          <th>MODIFICAD AQ</th>
        </tr>
        <tr>
          <th>Defense:</th>
          <th>PONTOS AQUI</th>
          <th>MODIFICAD AQ</th>
        </tr>
        <tr>
          <th>Magic:</th>
          <th>PONTOS AQUI</th>
          <th>MODIFICAD AQ</th>
        </tr>
        <tr>
          <th>Magical Defense:</th>
          <th>PONTOS AQUI</th>
          <th>MODIFICAD AQ</th>
        </tr>
        <tr>
          <th>Dexterity:</th>
          <th>PONTOS AQUI</th>
          <th>MODIFICAD AQ</th>
        </tr>
        <tr>
          <th>Stealth:</th>
          <th>PONTOS AQUI</th>
          <th>MODIFICAD AQ</th>
        </tr>
        <tr>
          <th>Precision:</th>
          <th>PONTOS AQUI</th>
          <th>MODIFICAD AQ</th>
        </tr>
      </thead>
    </table>
    </div>
  )
}
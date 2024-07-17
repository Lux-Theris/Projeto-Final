import styles from './app.module.css'
import { Basic } from './components/Basic/Basic'
import { Header } from './components/Header/Header'
import { Money } from './components/Money/Money'
import { Separator } from './components/Separator/Separator'
import { Status } from './components/Status/Status'

function App() {

  return (
    <div className={styles.Overall}>
      <Header />
      <main>
        <div className={styles.Left}>
          <Basic />
          <Separator />
          <Status />
          <Separator />
          <Money />
        </div>
      </main>
      </div>

  )
}

export default App

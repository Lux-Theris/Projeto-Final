import styles from './app.module.css'
import { Basic } from './components/Basic/Basic'
import { Header } from './components/Header/Header'
import { Money } from './components/Money/Money'
import { Separator } from './components/Separator/Separator'
import { Status } from './components/Status/Status'
import { Titles } from './components/Titles/Titles'
import { Inventory } from './components/Inventory/Inventory'
import { Skills } from './components/Skills/Skills'

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
        <div className={styles.Center}>
            <Titles />
            <Separator />
            <Inventory />
        </div>
        <div className={styles.Right}>
          <Skills />
        </div>
      </main>
      </div>

  )
}

export default App

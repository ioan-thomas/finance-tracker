// styles
import styles from './Home.module.css'
// components
import { TransactionForm } from './TransactionForm'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>Transaction list</div>
      <div className={styles.sidebar}>
        <TransactionForm/>
      </div>
    </div>
  )
}

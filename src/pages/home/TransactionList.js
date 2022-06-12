import styles from './Home.module.css'

export function TransactionList({transactions}) {
  return (
        <ul className={styles.transactions}>
            {transactions.map(transaction => {
                return (<li key={transaction.id}>
                    <p className={styles.name}>{transaction.name}</p>
                    <p className={styles.amount}>${transaction.amount}</p>
                </li>)}
            )}
        </ul>
  )
}

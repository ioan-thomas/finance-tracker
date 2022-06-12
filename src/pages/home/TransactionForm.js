 import {useEffect, useState} from 'react'
 import { useFirestore } from '../../hooks/useFirestore'
 
 export function TransactionForm({uid}) {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const {addDocument, response:{success}} = useFirestore('transactions')

    const handleSubmit = (e) => {
        e.preventDefault();
        addDocument({uid, name, amount});
    }

    useEffect(() => {
      if(success){
        setName('');
        setAmount('');
      }

    }, [success])

   return (
     <>
        <h3>Add a Transaction</h3>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Transaction name:</span>
                <input
                 type="text" 
                 required 
                 onChange={e => setName(e.target.value)}
                 value={name}
                 />
            </label>
            <label>
                <span>Amount ($):</span>
                <input
                 type="number" 
                 required 
                 onChange={e => setAmount(e.target.value)}
                 value={amount}
                 />
            </label>
            <button>Add Transaction</button>
        </form>
     </>
   )
 }
 
import React,{useContext} from 'react'
import { GlobalContext } from '../context/globalstate'
import Transactions from './Transactions.jsx'
const Transaction = () => {
 const {transactions} = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transactions key ={transaction.id} transaction={transaction} /> ))}
        
      </ul>
    </>
  )
}

export default Transaction

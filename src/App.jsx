import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import Income from './components/Income'
import Transaction from './components/Transaction'
import Addtransac from './components/Addtransac'
import { GlobalProvider} from './context/globalstate'
import './App.css'

function App() {
  

  return (
      <GlobalProvider>
      
      <Header />
      <div className="container">
        <Balance />
        <Income />
        <Transaction />
        <Addtransac />
      </div>
      
      </GlobalProvider>
   
  )
}

export default App

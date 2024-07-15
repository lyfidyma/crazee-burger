import { useState } from 'react'
import './App.css'
import OrderPage from './components/pages/commande/OrderPage'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  
  return(
    <div>
    
    
        <Routes>
          <Route path='/order' element={<OrderPage/>}/>
        </Routes>
      
    </div>
  ) 
  
}

export default App

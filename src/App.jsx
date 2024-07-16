import { useState } from 'react'
import './App.css'
import OrderPage from './components/pages/commande/OrderPage'
import { Route, Router, Routes } from 'react-router-dom'
import LoginPage from './components/pages/login/LoginPage'
import ErrorPage from './components/pages/error/ErrorPage'

function App() {
  
  return(
    <div>
      
      <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path="/order/:username" element={<OrderPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      
    </div>
  )
  
}

export default App

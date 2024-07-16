import React from 'react'
import App from '../../../App'
import { useNavigate, useParams } from 'react-router-dom'

const OrderPage = () => {
  const navigate = useNavigate()
  const { username } = useParams()
  const handleDisconnect = () => {
    navigate("/")
  }
  
  return (
    <div>
        <h2>Bonjour {username}</h2>
        <br />
        <button onClick={handleDisconnect}>Déconnexion</button>
    </div>
  )
}

export default OrderPage


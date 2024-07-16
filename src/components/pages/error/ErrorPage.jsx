import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ErrorPage() {

    const handleDisconnect = () => {
        
    }
  return (
    <div>
        <h2>ErrorPage</h2>
        <br />
        <button><Link to="/">Retour à la page d'accueil</Link></button>
    </div>
  )
}

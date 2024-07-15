import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'


export default function LoginForm() {
    const [prenom, setPrenom] = useState('')
    const handleSubmit = (event) => {
      
     }
    const handleChange = (event) => { 
        setPrenom(event.target.value)
     }
  return (
   <div>
        <form action='submit' onSubmit={handleSubmit}>
            <h2>Bienvenue</h2>
            <br />
            <h3>Connectez-vous</h3>
            <input 
                type='text' 
                placeholder='Entrez votre prénom ...'
                value={prenom}
                onChange={handleChange} 
                required/>
            <button>Accédez à votre compte</button>
        </form>
        </div>
  )
}

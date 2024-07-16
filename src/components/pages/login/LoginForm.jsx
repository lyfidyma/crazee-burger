import React, { useRef, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'


export default function LoginForm() {
    const navigate = useNavigate()
    const [prenom, setPrenom] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        setPrenom("")
        navigate(`order/${prenom}`)    
        
     }
    const handleChange = (event) => { 
        setPrenom(event.target.value)
     }
  return (
   <div>
        <form  onSubmit={handleSubmit}>
            <h2>Bienvenue chez nous !</h2>
            <br />
            <h3>Connectez-vous</h3>
            <input 
                type='text' 
                placeholder='Entrez votre prénom ...'
                value={prenom}
                onChange={handleChange} 
                required/>
            <button type='submit'>Accédez à votre compte</button>
        </form>
        </div>
  )
}

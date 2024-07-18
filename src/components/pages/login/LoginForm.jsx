import React, { useRef, useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'


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
        <LoginFormStyled  onSubmit={handleSubmit}>
            <h2>Bienvenue chez nous !</h2>
            <br />
            <h3>Connectez-vous</h3>
            <input 
                type='text' 
                placeholder='Entrez votre prénom ...'
                value={prenom}
                onChange={handleChange} 
                required/>
            <button type='submit'>Accédez à votre compte<MdKeyboardArrowRight/></button>
        </LoginFormStyled>
        </div>
  )
}


const LoginFormStyled = styled.form`
    font-family: "Amatic SC", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
        font-family: "Open Sans", sans-serif;
        display: inline-flex;
    }
    
`

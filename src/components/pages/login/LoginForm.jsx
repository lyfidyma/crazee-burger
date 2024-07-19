import React, { useRef, useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../theme'
import { IoPersonCircleOutline } from 'react-icons/io5'
import imgBackground from '../../../img/background.jpg'

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
  
        <LoginFormStyled  onSubmit={handleSubmit}>
            <div>
                <h1>Bienvenue chez nous !</h1>
                <br />
                <hr/>
                <h2>Connectez-vous</h2>
            </div>
            <div>
            <IoPersonCircleOutline />
                <input 
                    type='text' 
                    placeholder='Entrez votre prénom'
                    value={prenom}
                    onChange={handleChange} 
                    required/>
                    
                <button type='submit'>Accédez à mon compte<MdKeyboardArrowRight/></button>
            </div>
        </LoginFormStyled>
        
  )
}


const LoginFormStyled = styled.form`
    font-family: "Amatic SC", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
    h1{
        color: white;
    }
    hr{
        width: 500px;
        border-color: ${theme.colors.primary};
    }
    h2{
        color: white;
    }

    div{
        display: flex;
        flex-direction: column;
        
    }
    input{
        font-family: "Open Sans", sans-serif;
        width: 395px;
        height: 40px;
        border-radius: 8px;
    }
    button{
        font-family: "Open Sans", sans-serif;
        width: 400px;
        color: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
    }
    
`

import React, { useRef, useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../theme'
import { IoChevronForward, IoPersonCircleOutline } from 'react-icons/io5'
import { BiSolidChevronRight } from 'react-icons/bi'
import Input from '../reusable-ui/Input'
import PrimaryButton from '../reusable-ui/PrimaryButton'
import { BsPersonCircle } from 'react-icons/bs'

export default function LoginForm() {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        setInputValue("")
        navigate(`order/${inputValue}`)    
        
     }
    const handleChange = (event) => { 
        setInputValue(event.target.value)
     }
  return (
  
        <LoginFormStyled action='submit' onSubmit={handleSubmit}>
            <div>
                <h1>Bienvenue chez nous !</h1>
                <hr/>
                <h2>Connectez-vous</h2>
            </div>
            <div>
                <Input
                    value={inputValue}
                    onChange={handleChange}
                    placeholder={"Entrer votre prénom"}
                    Icon={<BsPersonCircle />}
                    className="input-login"
                    required/>
                
                    <PrimaryButton label={"Accéder à mon espace"}
                    Icon={<IoChevronForward />}
                    />
            </div>
               
            
        
        </LoginFormStyled>
        
  )
}


const LoginFormStyled = styled.form`
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0px auto;
    padding: 40px ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.round};
    font-family: "Amatic SC", cursive;
    
    hr{
        border: 1.5px solid #f56a2c;
        margin-bottom: ${theme.gridUnit * 5}px;
    }
    
    h1{
        color: ${theme.colors.white};
        font-size: ${theme.fonts.P5};
    }
    
    h2{
        margin: 20px 10px 10px;
        color: ${theme.colors.white};
        font-size: ${theme.fonts.P4};
    }

    .input-login {
        margin: 18px 0;
    }
  
`

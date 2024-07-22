import React, { useRef, useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../theme'
import { IoChevronForward, IoPersonCircleOutline } from 'react-icons/io5'
import imgBackground from '../../../img/background.jpg'
import { FaChevronRight } from 'react-icons/fa'
import { BiSolidChevronRight } from 'react-icons/bi'
import Input from '../reusable-ui/Input'
import PrimaryButton from '../reusable-ui/PrimaryButton'

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
            <Input 
                value={inputValue} 
                onChange={handleChange}
                placeholder={"Entrer votre prénom"}
                Icon={<IoPersonCircleOutline className='icon'/>}
                required/>
                    
                <PrimaryButton label={"Accéder à mon espace"}
                Icon={<BiSolidChevronRight className='icon'/>}
                />
               
            
        
        </LoginFormStyled>
        
  )
}


const LoginFormStyled = styled.form`
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0px auto;
    padding: 2.5rem 2rem;
    border-radius: 5px;
    font-family: "Amatic SC", cursive;
    
    
    
    h1{
        color: white;
        font-size: 40px;
    }
    hr{
        border: 1.5px solid #f56a2c;
        margin-bottom: 40px;
    }
    h2{
        color: white;
        margin: 20px 10px 10px;
        font-size: 36px;
    }
  
`

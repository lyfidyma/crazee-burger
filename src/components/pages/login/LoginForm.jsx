import React, { useRef, useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../theme'
import { IoChevronForward, IoPersonCircleOutline } from 'react-icons/io5'
import imgBackground from '../../../img/background.jpg'
import { FaChevronRight } from 'react-icons/fa'
import { BiSolidChevronRight } from 'react-icons/bi'

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
  
        <LoginFormStyled action='submit' onSubmit={handleSubmit}>
            <div>
                <h1>Bienvenue chez nous !</h1>
                <hr/>
                <h2>Connectez-vous</h2>
            </div>
            <div className='input-with-icon'>
            <IoPersonCircleOutline className='icon'/>
                <input 
                    type='text' 
                    placeholder='Entrez votre prénom'
                    value={prenom}
                    onChange={handleChange} 
                    required/>
            </div>
                    
                <button 
                    className='button-with-icon' 
                    type='submit'>
                    <span>Accédez à mon compte</span>
                    <BiSolidChevronRight className='icon'/>
                </button>
               
            
        
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

    .input-with-icon{
        background-color: #ffff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding: 18px 24px;
        margin: 18px 0;

        .icon{
            font-size: 15px;
            margin-right: 8px;
            color: #93a2b1;
        }

        input{
            border: none;
            font-size: 15px;
            color: #17161a;
            width: 100%;
        }

        &::placeholder{
            background: white;
            color: lightgray;
        }
    }
        .button-with-icon{
            width: 100%;
            border: 1px solid red;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            position: relative;
            white-space: nowrap;
            text-decoration: none;
            line-height: 1;

            padding: 18px 24px;
            border-radius: 5px;
            font-size: 15px;
            font-weight: 700;
            color: white;
            background-color: ${theme.colors.primary};
            border: 1px solid ${theme.colors.primary};
            
        

        &:hover:not(:disabled){
            background-color: white;
            color: ${theme.colors.primary};
            border: 1px solid ${theme.colors.primary};
            transition: all 200ms ease-out;
        }
    

        &:active{
            color: white;
            background-color: ${theme.colors.primary};
            border: 1px solid ${theme.colors.primary};
        }

        &:disabled{
            opacity: 0.6;
            cursor: not-allowed;
        }

        .icon{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 15px;
            margin-left: 10px;
        }
    }
  
`

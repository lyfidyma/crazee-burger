import React, { useState } from 'react'
import LoginForm from './LoginForm'
import imgBackground from '../../../img/background.jpg'
import styled from 'styled-components'
import Logo from '../reusable-ui/Logo'

export default function LoginPage() {
    
  return (
    <LoginPageStyled>
      <Logo className={"logo-login-page"}/>
      <LoginForm/>
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${imgBackground}) rgba(0, 0, 0, 0.7);
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* ::before{
    content: "";
    z-index: -1;
  } */
    .logo-login-page{
      transform: scale(2.5);
    }

`



import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Profile from './Pofile'

export default function NavbarRightSide({username}) {
  return (
    <NavbarRightSideStyled>
        <Profile username={username}/>
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;

`
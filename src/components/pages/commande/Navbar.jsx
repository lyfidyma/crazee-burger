import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../reusable-ui/Logo';
import NavbarRightSide from './NavbarRightSide';

export default function Navbar({username}) {
   
  return (
    <NavbarStyled>
        <Logo/>
        <NavbarRightSide username={username}/>
        </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
    background-color: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    /* align-items: center; */
  
`;
import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../reusable-ui/Logo';
import NavbarRightSide from './NavbarRightSide';
import NavbarLeftSide from './NavbarLeftSide';

export default function Navbar({username}) {
   
  return (
    <NavbarStyled>
        <NavbarLeftSide/>
        <NavbarRightSide username={username}/>
        </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
    background-color: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
  
`;
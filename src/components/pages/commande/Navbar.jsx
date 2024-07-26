import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../reusable-ui/Logo';
import NavbarRightSide from './NavbarRightSide';
import { theme } from '../../../theme';
import { refreshPage } from '../../../utils/refreshPage'

export default function Navbar({username}) {
   
  return (
    <NavbarStyled>
        <Logo className="logo-order-page" onClick={refreshPage}/>
        <NavbarRightSide username={username}/>
        </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
    background: ${theme.colors.white};
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    .logo-order-page{
      cursor: pointer;
    }
    
    /* align-items: center; */
  
`;
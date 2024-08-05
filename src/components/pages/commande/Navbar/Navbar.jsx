import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavbarRightSide from './NavbarRightSide';
import { refreshPage } from '../../../../utils/refreshPage'
import Logo from '../../reusable-ui/Logo';
import { theme } from '../../../../theme';

export default function Navbar() {
   
  return (
    <NavbarStyled>
        <Logo className="logo-order-page" onClick={refreshPage}/>
        <NavbarRightSide />
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
    border-bottom: 1px solid ${theme.colors.greyLight};

    .logo-order-page{
      cursor: pointer;
    }
    
    /* align-items: center; */
  
`;
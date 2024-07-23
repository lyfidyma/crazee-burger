import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../reusable-ui/Logo';

export default function Navbar({username}) {
   
  return (
    <NavbarStyled>
        <div>
          <Logo/>
        </div>
        <div>
          <h2>Bonjour {username}</h2>
          <Link to={"/"}>
            <button>Déconnexion</button>
          </Link>
        </div>
        </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
    background-color: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
`;
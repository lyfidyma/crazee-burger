import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function NavbarRightSide({username}) {
  return (
    <NavbarRightSideStyled>
          <h2>Bonjour {username}</h2>
          <Link to={"/"}>
            <button>Déconnexion</button>
          </Link>
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
    background: purple;
`
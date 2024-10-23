import React from 'react'
import styled from 'styled-components';
import Header from '../../../reusable-ui/Header';
import { theme } from '../../../../../theme';

export default function Footer() {
  return (
    <Header>
        <FooterStyled>
            <span>Codé avec ❤️️ et REACT.JS</span>
        </FooterStyled>
    </Header>
  )
}

const FooterStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    font-size: ${theme.fonts.P2};
    font-family: ${theme.fonts.family.stylish};
    font-weight: ${theme.weights.bold};
    color: ${theme.colors.white};
  }
`;

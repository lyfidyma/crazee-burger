import React, { useContext } from 'react'
import styled from 'styled-components';
import { theme } from '../../../../theme';
import Menu from './Menu/Menu';
import Admin from './Admin/Admin';
import OrderContext from '../../../../context/OrderContext';
import Basket from './Basket';
import MainRightSide from './MainRightSide';


export default function Main() {
  const {isModeAdmin, setIsModeAdmin} = useContext(OrderContext)
  return (
    <MainStyled>
      <Basket/>
      <MainRightSide/>
    </MainStyled>
  )
}

const MainStyled = styled.div`
    background-color: ${theme.colors.background_white};
    /* flex: 1; */
    height: calc(95vh - 10vh);

    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

    display: grid;
    //grid-template-columns: 1fr;
    //A activer lorsque le basket est actif ou ajouter 25% à la ligne ci-dessus
    grid-template-columns: 25% 1fr;
    overflow: hidden;

`

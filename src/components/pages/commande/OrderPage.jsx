import React, { useState } from 'react'
import App from '../../../App'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../reusable-ui/Logo'
import { theme } from '../../../theme'
import Navbar from './Navbar/Navbar'
import Main from './Main/Main'
import OrderContext from '../../../context/OrderContext.jsx'

const OrderPage = () => {
  //state
  const [isModeAdmin, setIsModeAdmin] = useState(true)
 //comportements
  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin
  }
 
 //affichage
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled >
        <div className='container'>
          <Navbar />
          <Main/>
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>

  )
}

export default OrderPage

const OrderPageStyled = styled.div`
  background-color: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container{
    background-color: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
import React from 'react'
import App from '../../../App'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../reusable-ui/Logo'
import { theme } from '../../../theme'
import Navbar from './Navbar/Navbar'
import Main from './Main/Main'

const OrderPage = () => {
 
  const { username } = useParams()
 
  
  return (
    <OrderPageStyled >
      <div className='container'>
        <Navbar username={username}/>
        <Main/>
      </div>
    </OrderPageStyled>

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
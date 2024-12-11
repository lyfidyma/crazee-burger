import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme'
import Navbar from './Navbar/Navbar'
import Main from './Main/Main'
import OrderContext from '../../../context/OrderContext.jsx'
import { EMPTY_PRODUCT } from '../../../enums/product.jsx'
import { useMenu } from '../hooks/useMenu.jsx'
import { useBasket } from '../hooks/useBasket.jsx'

const OrderPage = () => {
  //state
  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
  const titleEditRef = useRef()
  const {menu, handleAdd, handleDelete, handleEdit, resetMenu} = useMenu()
  const {basket, handleAddToBasket, handleDeleteBasketProduct}= useBasket()
  //comportements
  
  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    resetMenu,
    handleAdd,
    handleEdit,
    handleDelete,
    newProduct, 
    setNewProduct,
    productSelected,
    setProductSelected,
    titleEditRef,
    basket,
    handleAddToBasket,
    handleDeleteBasketProduct
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
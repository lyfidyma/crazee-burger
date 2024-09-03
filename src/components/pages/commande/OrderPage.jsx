import React, { useState } from 'react'
import App from '../../../App'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../reusable-ui/Logo'
import { theme } from '../../../theme'
import Navbar from './Navbar/Navbar'
import Main from './Main/Main'
import OrderContext from '../../../context/OrderContext.jsx'
import { fakeMenu } from '../../../fakeData/fakeMenu.js'
import { EMPTY_PRODUCT } from './Main/Admin/AdminPanel/AddForm.jsx'

const OrderPage = () => {
  //state
  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [menu, setMenu] = useState(fakeMenu.MEDIUM)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)


  //comportements
  const handleAdd = (newProduct) => {
    //1. Copie du tableau
    const menuCopy = [...menu]
    //2. Manip de la copie du tableau
    const menuUpdated = [newProduct, ...menuCopy]
    //3. Update du state
    setMenu(menuUpdated)
  }

  const handleDelete = (idOfProductToDelete)=>{
    //1. copy du state
    const menuCopy = [...menu]
    //2. manip de la copie du state
    const menuUpdated = menuCopy.filter((product)=> product.id !== idOfProductToDelete)
    console.log(menuUpdated)
    //. update du state
    setMenu(menuUpdated)
  }


  const resetMenu = () => {
    setMenu(fakeMenu.SMALL)
  }

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
    handleDelete,
    newProduct, 
    setNewProduct
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
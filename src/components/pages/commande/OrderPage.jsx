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
import { EMPTY_PRODUCT } from '../../../enums/product.jsx'
import { deepClone } from '../../../utils/array.jsx'

const OrderPage = () => {
  //state
  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [menu, setMenu] = useState(fakeMenu.MEDIUM)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)


  //comportements
  const handleAdd = (newProduct) => {
    //1. Copie du tableau
    const menuCopy = deepClone(menu)
    //2. Manip de la copie du tableau
    const menuUpdated = [newProduct, ...menuCopy]
    //3. Update du state
    setMenu(menuUpdated)
  }

  const handleDelete = (idOfProductToDelete)=>{
    //1. copy du state
    const menuCopy = deepClone(menu)
    //2. manip de la copie du state
    const menuUpdated = menuCopy.filter((product)=> product.id !== idOfProductToDelete)
    //3. update du state
    setMenu(menuUpdated)
  }

  const handleEdit = (productBeingEdited) => {
    //1. Copie du state(deep clone)
    const menuCopy = deepClone(menu)

    //2. Manip de la copie du state
    const indexOfProductToEdit = menu.findIndex(
      (menuProduct) => menuProduct.id === productBeingEdited.id
    )
    
    menuCopy[indexOfProductToEdit] = productBeingEdited

    //3. update du state
    setMenu(menuCopy)
    
    
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
    handleEdit,
    handleDelete,
    newProduct, 
    setNewProduct,
    productSelected,
    setProductSelected
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
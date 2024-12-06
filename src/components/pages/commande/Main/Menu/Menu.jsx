import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import Card from '../../../reusable-ui/Card'
import { formatPrice } from '../../../../../utils/maths'
import OrderContext from '../../../../../context/OrderContext';
import EmptyMenuAdmin from './EmptyMenuAdmin';
import EmptyMenuClient from './EmptyMenuClient';
import { checkIfProductIsClicked } from './helper';
import { EMPTY_PRODUCT, DEFAULT_IMAGE } from '../../../../../enums/product';
import { find } from '../../../../../utils/array';


export default function Menu() {
    const { 
      menu, 
      isModeAdmin, 
      handleDelete, 
      resetMenu, 
      productSelected,
      setProductSelected,
      setIsCollapsed,
      setCurrentTabSelected,
      titleEditRef,
      handleAddToBasket,
    } = useContext(OrderContext)
    //state

    //comportements
    const handleClick = async (idProductClicked) => {
      if(!isModeAdmin) return

      await setIsCollapsed(false)
      await setCurrentTabSelected("edit")
      const productClickedOn = find(idProductClicked, menu)
      await setProductSelected(productClickedOn)
      titleEditRef.current.focus()
  
    }

    const handleCardDelete = (event, idProductToDelete) => { 
      event.stopPropagation()
      handleDelete(idProductToDelete)
      idProductToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT)
      titleEditRef.current.focus()
     }

     const handleAddButton = (event, idProductToAdd) => {
      event.stopPropagation()
      const productToAdd = find(idProductToAdd, menu)
      console.log("productToAdd", productToAdd)
      handleAddToBasket(productToAdd)
     }

  //affichage
  if(menu.length === 0){
    if(!isModeAdmin) return <EmptyMenuClient/>
    return <EmptyMenuAdmin onReset={resetMenu}/>
  }

    
  return (
    <MenuStyled className='menu'>
        {menu.map(({id, title, imageSource, price})=>{
           return (
             <Card 
                key={id}
                title={title} 
                imageSource={imageSource ? imageSource : DEFAULT_IMAGE} 
                leftDescription={formatPrice(price)}
                hasDeleteButton={isModeAdmin}
                onDelete={(event)=> handleCardDelete(event, id)}
                onClick={() => handleClick(id)}
                isHoverable={isModeAdmin}
                isSelected={checkIfProductIsClicked(id, productSelected.id)}
                onAdd={(event) => handleAddButton(event, id )}
                />
                // <Card key={product.id} {...product}/>
        )
        }
        )}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
      background-color: ${theme.colors.background_white};
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
      grid-row-gap: 60px;
      padding: 50px 50px 150px;
      justify-items: center;
      box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
      overflow-y: scroll;
`;
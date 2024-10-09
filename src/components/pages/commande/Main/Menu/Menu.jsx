import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import Card from '../../../reusable-ui/Card'
import { formatPrice } from '../../../../../utils/maths'
import OrderContext from '../../../../../context/OrderContext';
import EmptyMenuAdmin from './EmptyMenuAdmin';
import EmptyMenuClient from './EmptyMenuClient';
import { checkIfProductIsClicked } from './helper';

const DEFAULT_IMAGE = "/images/coming-soon.png"

export default function Menu() {
    const { menu, isModeAdmin, handleDelete, resetMenu, productSelected, setProductSelected } = useContext(OrderContext)
    //state

    //comportements
    const handleClick = (idProductClicked) => {
      const productClickedOn = menu.find((product) => product.id === idProductClicked)
      setProductSelected(productClickedOn)
  
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
                onDelete={()=> handleDelete(id)}
                onClick={() => handleClick(id)}
                isHoverable={isModeAdmin}
                isSelected={checkIfProductIsClicked(id, productSelected.id)}
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
      grid-template-columns: repeat(4, 1fr);
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-row-gap: 60px;
      padding: 50px 50px 150px;
      justify-items: center;
      box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
      overflow-y: scroll;
`;
import React from 'react'
import styled from 'styled-components'
import BasketCard from './BasketCard'
import { DEFAULT_IMAGE } from '../../../../../enums/product'

export default function BasketProducts({basket, isModeAdmin}) {

  const handleOnDelete = (id) => {

   }
  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => (
        <div className="basket-card" key={basketProduct.id}>
         <BasketCard {...basketProduct} imageSource={basketProduct.imageSource ? basketProduct.imageSource : DEFAULT_IMAGE}
         onDelete={() => handleOnDelete(basketProduct.id)}
         isModeAdmin={isModeAdmin}
         />
        
        </div>
      ))}
      
    </BasketProductsStyled>
  )
}

const BasketProductsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .basket-card {
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    :first-child {
      margin-top: 5px;

    }
    :last-child {
      margin-bottom: 5px;
    }
  }
`
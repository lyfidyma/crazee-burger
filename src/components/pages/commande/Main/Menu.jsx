import React, { useState } from 'react'
import styled from 'styled-components';
import { fakeMenu1, fakeMenu2 } from '../../../../fakeData/fakeMenu'
import { theme } from '../../../../theme';
import Card from '../../reusable-ui/Card'
import { formatPrice } from '../../../../utils/maths'

export default function Menu() {
    const [menu, setMenu] = useState(fakeMenu2)

  return (
    <MenuStyled>
        {menu.map(({id, title, imageSource, price})=>{
           return (
             <Card 
                key={id}
                title={title} 
                imageSource={imageSource} 
                leftDescription={formatPrice(price)}
                />
                // <Card key={product.id} {...product}/>
        )
        }
        )}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
      border: 3px solid blue;
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
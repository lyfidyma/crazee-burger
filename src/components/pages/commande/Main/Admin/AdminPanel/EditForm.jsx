import React, { useContext, useState } from 'react'
import OrderContext from '../../../../../../context/OrderContext'
import Input from '../../../../reusable-ui/Input'
import { getInputTextsConfig } from './inputTextConfig'
import styled from 'styled-components'
import ImagePreview from './ImagePreview'
import { theme } from '../../../../../../theme'
import EditInfoMessage from './EditInfoMessage'
import Form from './Form'

export default function EditForm() {
  //state
  const { productSelected, setProductSelected, handleEdit, titleEditRef } = useContext(OrderContext)

  const inputTexts = getInputTextsConfig(productSelected)

  //comportements
const handleChange = (event) => {
  const {name, value} = event.target

  const productBeingUpdated = {
    ...productSelected,
    [name]: value,
  }
  
  setProductSelected(productBeingUpdated)  //Cette ligne update le formulaire
  handleEdit(productBeingUpdated)         //Cette ligne update le menu
}

//affichage
  return (
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage/>
    </Form>
  )
}


const EditFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields{
    grid-area: 1 / 2 / -2 / 3;
    display: grid;
    grid-row-gap: 8px;

  }

  .submit{
    /* background: green; */
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;    
  }
`;

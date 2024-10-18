import React, { useContext, useState } from 'react'
import OrderContext from '../../../../../../context/OrderContext'
import Input from '../../../../reusable-ui/Input'
import { getInputTextsConfig } from './inputTextConfig'
import styled from 'styled-components'
import ImagePreview from './ImagePreview'
import { theme } from '../../../../../../theme'

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
    <EditFormStyled>
     <ImagePreview imageSource={productSelected.imageSource} title={productSelected.title}/>
      <div className='input-fields'>
         {inputTexts.map((input) =>(
            <Input
              key = {input.id}
              // name = {input.name}
              // value = {input.value}
              // placeholder = {input.placeholder}
              // Icon = {input.Icon}
              //Code ci-dessus remplacer par
              {...input}
              onChange = {handleChange}
              version = "minimalist"
              ref={input.name === "title" ? titleEditRef : null}
            />
         ))}
      </div>
      <div className="submit">
        <span className='sentence'>
          Cliquer sur un produit du menu pour le modifier{" "}
          <span className='live-update'>en temps réel</span>
        </span>
          </div>
    </EditFormStyled>
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

    .sentence{
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.SM};
      .live-update{
        text-decoration: underline;
      }
    }
  }
`;

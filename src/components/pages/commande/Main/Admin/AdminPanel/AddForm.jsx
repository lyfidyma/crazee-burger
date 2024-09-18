import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext.jsx';
import Input from '../../../../reusable-ui/Input.jsx';
import Button from '../../../../reusable-ui/Button.jsx'
import ImagePreview from './ImagePreview.jsx';
import SubmitMessage from './SubmitMessage.jsx';
import { getInputTextsConfig } from './inputTextConfig.jsx';
import { EMPTY_PRODUCT } from '../../../../../../enums/product.jsx';

export default function Addform() {

  //state
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext)
  const [isSubmitted, setIsSubmitted] = useState(false)

  //comportements
  const handleSubmit = (event) =>{
    event.preventDefault()
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    }
    handleAdd(newProductToAdd)
    setNewProduct(EMPTY_PRODUCT)
    displaySuccessMessage()
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewProduct({ ...newProduct, [name]: value })

  }

  const displaySuccessMessage = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, 2000)
  }

  const inputTexts = getInputTextsConfig(newProduct)

  //affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
     <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title}/>
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
            />
         ))}
      </div>
      <div className="submit">
        <Button 
          className="submit-button" 
          label={"Ajouter un nouveau produit au menu"}
          version="success"
          />
        {isSubmitted && <SubmitMessage/>}
      </div>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
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

    .submit-button{
      /* width: 50%; */
      height: 100%;
    }
  }
`;

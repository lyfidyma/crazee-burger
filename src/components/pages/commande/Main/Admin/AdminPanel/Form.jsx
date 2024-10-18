import React from 'react'
import Input from '../../../../reusable-ui/Input';
import ImagePreview from './ImagePreview';
import SubmitMessage from './SubmitMessage.jsx'
import Button from '../../../../reusable-ui/Button';
import styled from 'styled-components';
import { getInputTextsConfig } from './inputTextConfig';

export default function Form({product, onSubmit, onChange, isSubmitted}) {

    //state 
    //comportements
    const inputTexts = getInputTextsConfig(product)

    //Affichage
  return (
    <FormStyled onSubmit={onSubmit}>
    <ImagePreview imageSource={product.imageSource} title={product.title}/>
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
             onChange = {onChange}
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
   </FormStyled>
  )
}


const FormStyled = styled.form`
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


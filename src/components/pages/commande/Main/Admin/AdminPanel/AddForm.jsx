import React, { useContext } from 'react'
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext.jsx';

export default function Addform() {
  const { handleAdd } = useContext(OrderContext)

  const newProduct = {
    id: new Date().getTime(),
    title: "Nouveau produit",
    imageSource: "https://gsrextraa.com/files/articles/80/cover-669f60bdace5d.jpg",
    price: 2.5,
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    handleAdd(newProduct)
  }
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className='image-preview'>ImagePreview</div>
      <div className='input-fields'>
         <input type="text" placeholder='Nom du produit'/>
         <input type="text" placeholder='Image url'/>
         <input type="text" placeholder='Prix' />
      </div>
      <button className='submit-button'>Submit button</button>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;

  .image-preview{
    background: red;
    grid-area: 1 / 1 / 4 / 2;
  }

  .input-fields{
    background: blue;
    grid-area: 1 / 2 / -2 / 3;
    display: grid;
  }

  .submit-button{
    background: green;
    grid-area: 4 / -2 / -1 / -1;
    width: 50%;
  }


  
`;

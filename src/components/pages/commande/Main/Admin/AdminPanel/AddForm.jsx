import React, { useContext, useState } from 'react'
import OrderContext from '../../../../../../context/OrderContext.jsx';

import { EMPTY_PRODUCT } from '../../../../../../enums/product.jsx';
import Form from './Form.jsx'
import SubmitButton from './SubmitButton.jsx';
import { useSuccessMessage } from '../../../../hooks/useSuccessMessage.jsx';

export default function Addform() {

  //state
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext)
  //const [isSubmitted, setIsSubmitted] = useState(false)
  const { isSubmitted, displaySuccessMessage } = useSuccessMessage(5000)

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

  


  //affichage
  return (
      <Form
        product={newProduct}
        onSubmit={handleSubmit}
        onChange={handleChange}
        isSubmitted={isSubmitted}
      >
        <SubmitButton isSubmitted={isSubmitted}/>

      </Form>

  )
}

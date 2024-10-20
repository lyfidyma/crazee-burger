import React, { useContext, useState } from 'react'
import OrderContext from '../../../../../../context/OrderContext.jsx';

import { EMPTY_PRODUCT } from '../../../../../../enums/product.jsx';
import Form from './Form.jsx'
import SubmitButton from './SubmitButton.jsx';

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

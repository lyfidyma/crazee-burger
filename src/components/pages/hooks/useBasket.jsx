import { useState } from "react"
import { fakeBasket } from "../../../fakeData/fakeBasket"
import { deepClone, find } from "../../../utils/array"

export const useBasket = () => {
    const [basket, setBasket] = useState(fakeBasket.SMALL)
    const handleAddToBasket = (productToAdd) => {

        //1. Copie du state
        const basketCopy = deepClone(basket)

        const isProductAlreadyInBasket = find(productToAdd.id, basketCopy) !==undefined
        console.log(isProductAlreadyInBasket)

        //2. Manip de la copie du state
        //1er cas : le produit n'est pas déjà dans le state
        if(!isProductAlreadyInBasket) {
            const newBasketProduct = {
                ...productToAdd,
                quantity: 1,
            }

            const basketUpdated = [newBasketProduct, ...basketCopy]
            // Update du state
            setBasket(basketUpdated)
        //return
        }else {
          //2eme cas : le produit est déjà dans le state
            const indexOfBasketProductToIncrement = basket.findIndex(
                (basketProduct) => basketProduct.id === productToAdd.id 
            )
            basketCopy[indexOfBasketProductToIncrement].quantity += 1
    
         // Update du state
         setBasket(basketCopy)

        }


      
     }
    return { basket, handleAddToBasket }
 }
import { useState } from "react"
import { fakeBasket } from "../../../fakeData/fakeBasket"
import { deepClone, find, findIndex } from "../../../utils/array"

export const useBasket = () => {
    const [basket, setBasket] = useState(fakeBasket.EMPTY)
    const handleAddToBasket = (productToAdd) => {

        //1. Copie du state
        const basketCopy = deepClone(basket)

        const isProductAlreadyInBasket = find(productToAdd.id, basketCopy) !==undefined
        console.log(isProductAlreadyInBasket)

        //2. Manip de la copie du state
        //1er cas : le produit n'est pas déjà dans le state
        if(!isProductAlreadyInBasket) {
            createNewProductInBasket(productToAdd, basketCopy, setBasket)
            return
        }
          //2eme cas : le produit est déjà dans le state
            incrementProductAlreadyInBasket(productToAdd, basketCopy)      


       
     }

     const incrementProductAlreadyInBasket = (productToAdd, basketCopy) => {
        const indexOfBasketProductToIncrement = findIndex(productToAdd.id, basketCopy)
        basketCopy[indexOfBasketProductToIncrement].quantity += 1

        // Update du state
        setBasket(basketCopy)
    }

    const createNewProductInBasket = (productToAdd, basketCopy, setBasket) => {
        const newBasketProduct = {
            ...productToAdd,
            quantity: 1,
        }

        const basketUpdated = [newBasketProduct, ...basketCopy]
        // Update du state
        setBasket(basketUpdated)
    }

    return { basket, handleAddToBasket }
 }
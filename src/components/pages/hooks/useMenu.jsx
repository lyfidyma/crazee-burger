import { useState } from "react"
import { deepClone } from "../../../utils/array"
import { fakeMenu } from "../../../fakeData/fakeMenu"

export const useMenu = () => { 
    const [menu, setMenu] = useState(fakeMenu.MEDIUM)
    const handleAdd = (newProduct) => {
        //1. Copie du tableau
        const menuCopy = deepClone(menu)
        //2. Manip de la copie du tableau
        const menuUpdated = [newProduct, ...menuCopy]
        //3. Update du state
        setMenu(menuUpdated)
      }
    
      const handleDelete = (idOfProductToDelete)=>{
        //1. copy du state
        const menuCopy = deepClone(menu)
        //2. manip de la copie du state
        const menuUpdated = menuCopy.filter((product)=> product.id !== idOfProductToDelete)
        //3. update du state
        setMenu(menuUpdated)
      }
    
      const handleEdit = (productBeingEdited) => {
        //1. Copie du state(deep clone)
        const menuCopy = deepClone(menu)
    
        //2. Manip de la copie du state
        const indexOfProductToEdit = menu.findIndex(
          (menuProduct) => menuProduct.id === productBeingEdited.id
        )
        
        menuCopy[indexOfProductToEdit] = productBeingEdited
    
        //3. update du state
        setMenu(menuCopy)
        
        
        }
    
    
      const resetMenu = () => {
        setMenu(fakeMenu.SMALL)
      }
      
      return {menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu}
 }
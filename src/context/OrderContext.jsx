import { createContext } from "react";

export default createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => {},

    // isCollapsed: false,
    // setIsCollapsed: () => {},
    // currentTabSelected: false,
    // setCurrentTabSelected: () => {},
   
    menu: [],
    handleAdd: () => {},
    newProduct: [], 
    setNewProduct: () => {},
    productSelected: {},
    setProductSelected: () => {},
    handleEdit: () => {},
    titleEditRef: {},
})
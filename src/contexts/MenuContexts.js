import React, { useContext, useState} from 'react'
import { v4 as uuidV4} from 'uuid'
const MenuContext = React.createContext()

export function useMenus(){
    return useContext(MenuContext)
}

export const MenuProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const menuItems = [
        {ID: 1, name: 'testMenuItem1', price: 1},
        {ID: 2, name: 'testMenuItem2', price: 2},
        {ID: 3, name: 'testMenuItem3', price: 3},
        {ID: 4, name: 'testMenuItem4', price: 4},
        {ID: 5, name: 'testMenuItem5', price: 5},
        {ID: 6, name: 'testMenuItem6', price: 6},
        {ID: 7, name: 'testMenuItem7', price: 7},
        {ID: 8,name: 'testMenuItem8', price: 8},
    ]
    function addItem( name, price){
        setItems(prevItems => {
            return [...prevItems, { id: uuidV4(), name, price}]
        })
        console.log(items)
    }

    function deleteItem( id ){
        setItems(prevItems => {
            return prevItems.filter(items => items.id !== id)
        })
        console.log(items)
    }
    return (
        <MenuContext.Provider value={{
            items,
            menuItems,
            addItem,
            deleteItem,
        }}>{children}</MenuContext.Provider>
    )
}
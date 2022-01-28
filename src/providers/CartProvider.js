import {useState} from 'react';
import { CartContext } from '../contexts/CartContext';

export function CartProvider({ children}){
    const [cartItems, setCartItems] = useState([])
    
    const contextValue = {
        items: cartItems,
        get length() {
            return cartItems.reduce((red, item) => red + item.quantity, 0)
        },
        get total() {
            return cartItems.reduce(
                (red, item) => red + item.quantity * item.precio,
                 0
                 )
            },
        get isEmpty(){
            return cartItems.length === 0
        },
        grtItem(cartItemId){
            return cartItems.find((cartItem) => cartItem.id === cartItemId)
        },
        clear(){
            setCartItems ([])
        },
        removeItem (cartItemId){
        setCartItems((currentItems)=>{
            return currentItems.filter((cartItem)=> cartItem.id !== cartItemId)

        })
        
        },
        addItem (newCartItem) {
            setCartItems((currentItems) =>{
                const clonedItems = [...currentItems]

                const itemIndex = clonedItems.findIndex(
                    (cartItem) => cartItem.id === newCartItem.id
                )
                if (itemIndex === -1){
                    clonedItems.push(newCartItem)
                } else{
                    clonedItems[itemIndex] = newCartItem
                }
                return clonedItems
            })  
        },        

    }

    return (
        <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
        )
}











        


//     return (
//         <CartContext.Provider value={contextValue}>children</CartContext.Provider>)

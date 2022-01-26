import {useState} from 'react';
import { CartContext } from './CartContext';

export function CartProvider({ children}){
    const {cartItems, setCartItems} = useState()
    
    const contextValue = {
        cartItems,
        
    addToCart(cartItem) {
        setCartItems((cuerrentItems => [...cuerrentItems, cartItem]))
    },
    removeToCart (cartItemId){
        setCartItems((cuerrentItems)=>
        cuerrentItems.filter(item => {
            return item.id !== cartItemId;
        } ))
    },
    clear(){
        setCartItems ([])
    }
    };

    return (
        <CartContext.Provider value={contextValue}>children</CartContext.Provider>)
}
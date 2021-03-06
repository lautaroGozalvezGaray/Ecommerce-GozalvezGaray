import React, { createContext } from 'react';
import { useState } from 'react';

export const Shop = createContext();

export const ShopProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    // funcion para agregar un item y que no se repita
    const addItem = (producto, cantidad) => {
        const productAgain = isInCart(producto);
        if(productAgain){
            productAgain.quantity += cantidad;
            setCart([...cart]);
        }else{
            setCart([...cart, {...producto, quantity: cantidad}]);
        }
    }

    //funcion para agregar al cartWidget la cantidad total de productos agregados al carrito 

    const quantity = () => {
        let quantityItems=0;
        cart.map((element) => (
        quantityItems += element.quantity
        ));
        return quantityItems;
    }

    // funcion para remover el un item.
    const removeItem = (value) => {
        if(cart.length > 0){
            const updateCart = cart.filter((item) => {
                return item.id !== value;
            });
            setCart(updateCart);
        }
    }

    // funcion para remover todos los items de cart
    const removeAll = () => {
        if(cart.length>0){
            const updateCart = [];
            setCart(updateCart)
        }
    }

    // funcion que chekea si el item esta agregado al cart
    const isInCart = (product) => {
        return cart.find(elemento => elemento.id === product.id)
    }

    const totalItems = () => {
        let total=0;
        cart.map((element) => (
          total += parseFloat(element.price * element.quantity)
        ));
        return total;
    }

    return (
        <Shop.Provider value={{totalItems, addItem, cart, removeItem, removeAll, quantity}}>
            {children}
        </Shop.Provider>
  )
}

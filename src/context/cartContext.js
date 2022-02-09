import { createContext, useContext, useState } from "react";

/* Creado del contexto */
const CartContext = createContext([])


/* Funcion que me permite importar el contexto en todos lados */
export function useCartContext() {
    return useContext(CartContext)
}


/* Creo el componente que maneja todo el contexto */
export const CartContextProvider = ({children}) => {

    /* Creado de estados y funciones globales */
    const [cartList, setCartList] = useState([])

    /* Agrego productos al carrito */
    function addToCart(items) {
        
        const index = cartList.findIndex(i => i.id === items.id)

        if (index > -1) {

            const qtyPrev = cartList[index].quantity

            cartList.splice(index, 1)

            setCartList([...cartList, {...items, quantity: items.quantity + qtyPrev}])
            
        } else {

            setCartList([...cartList, {...items, quantity: items.quantity}])
            
        }
    }    

    /* Vacio carrito */
    const deleteCart = () => {
        setCartList([])
    }

    /* Eliminar producto */
    const removeItem = (id) => {
        const arrayFixed = cartList.filter((product) => product.id !== id);
        setCartList(arrayFixed);
    }

    /* Cantidad total de productos */
    const qtyProds = () => {
        let quantityProds = 0;
        cartList.forEach((product) => {
            quantityProds += product.quantity;
        });
        return quantityProds;
    }

    /* Precio total */
    const total = () => {
        let summation = 0;
        cartList.forEach((product) => {
            summation += product.price * product.quantity;
        });
        return summation;
    };


    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            deleteCart,
            removeItem,
            total,
            qtyProds
        }}>
            {children}
        </CartContext.Provider>
        

    )

}
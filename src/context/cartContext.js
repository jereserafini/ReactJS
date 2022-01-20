import { createContext, useContext, useState } from "react";

/* Creado del contexto */
const CartContext = createContext([])


/* Funcion que me permite importar el useContext en todos lados */
export function useCartContext() {
    return useContext(CartContext)
}


/* Creo el componente que maneja todo el contexto */
export const CartContextProvider = ({children}) => {

    /* Creado de estados y funciones globales */
    const [cartList, setCartList] = useState([])

    /* Agrego productos al carrito */
    function agregarAlCarrito(items) {
        
        const index = cartList.findIndex(i => i.id === items.id)        

        if (index > -1) {

            const cantAnterior = cartList[index].cantidad

            cartList.splice(index, 1)

            setCartList([...cartList, {...items, cantidad: items.cantidad + cantAnterior}])
            
        } else {
            setCartList([...cartList, {...items, cantidad: items.cantidad}])            
        }
    }    

    /* Vacio carrito */
    function vaciarCarrito() {
        setCartList([])
    }


    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
        

    )

}
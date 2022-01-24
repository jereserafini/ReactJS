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

    /* Eliminar producto */
    const eliminarItem = (id) => {
        const arraySinItem = cartList.filter((producto) => producto.id !== id);
        setCartList(arraySinItem);
    }

    /* Cantidad total de productos */
    const cantidadProductos = () => {
        let numeroProductos = 0;
        cartList.forEach((producto) => {
            numeroProductos += producto.cantidad;
        });
        return numeroProductos;
    }

    /* Precio total */
    const total = () => {
        let sumatoria = 0;
        cartList.forEach((producto) => {
            sumatoria += producto.precio * producto.cantidad;
        });
        return sumatoria;
    };


    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito,
            eliminarItem,
            total,
            cantidadProductos
        }}>
            {children}
        </CartContext.Provider>
        

    )

}
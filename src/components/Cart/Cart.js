import React from 'react'
import { useCartContext } from '../../context/cartContext'
import Button from 'react-bootstrap/Button';


const Cart = () => {



    const {cartList, vaciarCarrito} = useCartContext()
    
    return (
        <div className='text-center text-white mt-5'>
            <h1>Carrito de Compras</h1>
            <div>
                <Button onClick={vaciarCarrito} className='mx-2 my-2' variant="light">Vaciar Carrito</Button>
            </div>
            <div className='text-center'>
                {cartList.map(
                    producto => 
                    <>
                        <div>
                            Producto: {producto.producto} Cantidad: {producto.cantidad} Precio: ${producto.precio}
                        </div>
                        
                    </>
                )}
            </div>

        </div>
    )
}

export default Cart
import React from 'react'
import { useCartContext } from '../../context/cartContext'
import Button from 'react-bootstrap/Button';
import { AiOutlineDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom';


const Cart = () => {

    const {cartList, vaciarCarrito, eliminarItem, total} = useCartContext()


    return (
        <div className='text-center text-white mt-5'>
            <h1 className='mb-5'>Carrito de Compras</h1>
            <div className='text-center'>
                {cartList.map(
                    producto => 
                    <>
                        <div key={producto.id} className='border border-secondary py-3 d-flex align-items-center'>
                            <div className='col-3'>Producto: {producto.producto}</div>
                            <div className='col-3'>Cantidad: {producto.cantidad}</div>
                            <div className='col-3'>Precio: ${producto.precio}</div>
                            <div className='col-3'><Button onClick={() => eliminarItem(producto.id)} variant="outline-danger"><AiOutlineDelete/></Button></div>
                        </div>
                        
                    </>
                )}
            </div>
            { cartList.length > 0 ? 

            <>
                <h3 className='text-white mt-5'>Total carrito: ${total()}</h3>
                <div className='mt-5'>
                    <Button onClick={vaciarCarrito} className='mx-2 my-2' variant="light">Vaciar Carrito</Button>
                </div>
            </>

            :
            
            <div className='mt-5'>
                <h2>Usted no agregó ningún producto al carrito de compras</h2>
                <Link to='/'>
                    <Button className='mt-5 mx-2 my-2' variant="light">Ir a la tienda</Button>
                </Link>
            </div>

            }

        </div>
    )
}

export default Cart
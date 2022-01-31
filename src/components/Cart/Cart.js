import React, { useState } from 'react'
import { useCartContext } from '../../context/cartContext'
import Button from 'react-bootstrap/Button';
import { AiOutlineDelete } from 'react-icons/ai';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore, query, Timestamp } from 'firebase/firestore';


const Cart = () => {

    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const {cartList, vaciarCarrito, eliminarItem, total} = useCartContext()
    const [orderId, setOrderId] = useState('');
    
    const createOrder = async () => {

        setLoading(true)

        // Creo el objeto de la orden
        let order = {}

        order.buyer = {name: 'Jeremias', email:'jerefernandez98@gmail.com', tel:'3624242464'};
        order.total = total();
        order.date = Timestamp.fromDate(new Date())

        order.items = cartList.map( prod => {
                const id = prod.id
                const product= prod.producto
                const price= prod.precio*prod.cantidad
                const quantity= prod.cantidad

                return {id, product, price, quantity}
        })

        const db = getFirestore()
        const orderCollection = query(collection(db, 'orders'))
        await addDoc(orderCollection, order)
        .then(res => setOrderId(res.id))
        .finally(() => setLoading(false))

    }

    return (
        <div className='text-center text-white mt-5'>
            <h1 className='mb-5'>Carrito de Compras</h1>
            <div className='text-center'>
                {cartList.map(
                    producto =>
                        <div key={producto.id} className='border border-secondary py-3 d-flex align-items-center'>
                            <div className='col-3'>Producto: {producto.producto}</div>
                            <div className='col-3'>Cantidad: {producto.cantidad}</div>
                            <div className='col-3'>Precio: ${producto.precio}</div>
                            <div className='col-3'><Button onClick={() => eliminarItem(producto.id)} variant="outline-danger"><AiOutlineDelete/></Button></div>
                        </div>
                )}
            </div>
            { cartList.length > 0 ? 

            <>
                <h3 className='text-white mt-5'>Total carrito: ${total()}</h3>
                <div className='mt-5 d-inline'>
                    <Button onClick={vaciarCarrito} className='mx-2 my-2' variant="light">Vaciar Carrito</Button>
                </div>
                <div className='mt-5 d-inline'>
                    <Button onClick={() => {createOrder(); setShow(true)}} className='mx-2 my-2' variant="light">Generar orden</Button>
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
            <div className='mt-5'>
                {loading ? <Spinner className='mt-5' animation="border" variant="light" />
                :
                
                show && <h3>Su numero de orden es: {orderId}</h3>
                
                }
            </div>
        </div>
    )
}

export default Cart
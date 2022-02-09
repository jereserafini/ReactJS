import { useState } from 'react'
import { useCartContext } from '../../context/cartContext'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import { addDoc, collection, documentId, getDocs, getFirestore, query, Timestamp, where, writeBatch } from 'firebase/firestore';
import Order from './Order';
import CartList from '../CartList/CartList';


const Cart = () => {

    const [data, setData] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: ''
      });
      
      const handleChange = (e) => {
    
        setData({
          ...data,
          [e.target.name]: e.target.value
        })
      }

    const {cartList, deleteCart, total} = useCartContext()

    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [orderId, setOrderId] = useState('');
    
    const createOrder = async () => {

        if (data.email === data.emailConfirmation && data.name !== '' && data.lastName !== '' && data.phone !== '') {
            
            setShow(true)

            delete data.emailConfirmation
    
            setLoading(true)
    
            // Creo el objeto de la orden
            let order = {}
    
            order.buyer = data;
            order.total = total();
            order.date = Timestamp.fromDate(new Date())
    
            order.items = cartList.map( prod => {
                    const id = prod.id
                    const product= prod.product
                    const price= prod.price*prod.quantity
                    const quantity= prod.quantity
    
                    return {id, product, price, quantity}
            })
    
            // Subida de la orden a firestore
            const db = getFirestore()
            const orderCollection = query(collection(db, 'orders'))
            await addDoc(orderCollection, order)
            .then(res => setOrderId(res.id))
            .catch(err => err)
            .finally(() => setLoading(false))
    
            
            // Actualizacion de stock
            const productsCollection = collection(db, 'products');
            const queryUpdateStock = query( productsCollection, where (documentId(), 'in', cartList.map(prod => prod.id)));
    
            const batch = writeBatch(db)
    
            await getDocs(queryUpdateStock)
            .then( resp => resp.docs.forEach( res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find( item => item.id === res.id).quantity
            })))
            .catch(err => err)
    
            batch.commit()
        } else {
            alert('Los emails ingresados no coinciden o existen campos sin completar')
        } 


    }

    return (
        <div className='text-center text-white mt-5'>
            <h1 className='mb-5'>Carrito de Compras</h1>
            <div className='text-center'>
                {<CartList/>}
            </div>
            { cartList.length > 0 ? 

            <>
                <h3 className='text-white my-5'>Total carrito: ${total()}</h3>


                {/* formulario */}
                <form className='container'>

                    <input
                        className='form-control'
                        placeholder='Nombre'
                        name='name'
                        type='text'
                        value={data.name}
                        onChange={handleChange}
                    /><br/>
                    <input
                        className='form-control'
                        placeholder='Apellido'
                        name='lastName'
                        type='text'
                        value={data.lastName}
                        onChange={handleChange}
                    /><br/>
                    <input
                        className='form-control'
                        placeholder='Teléfono'
                        name='phone'
                        type='number'
                        value={data.phone}
                        onChange={handleChange}
                    /><br/>
                    <input
                        className='form-control'
                        placeholder='Email'
                        name='email'
                        type='email'
                        value={data.email}
                        onChange={handleChange}
                    /><br/>
                    <input
                        className='form-control'
                        placeholder='Vuelva a ingresar su Email'
                        name='emailConfirmation'
                        type='text'
                        value={data.text}
                        onChange={handleChange}
                    />
                </form>
                
                <div className='mt-5 d-inline'>
                    <Button onClick={deleteCart} className='mx-2 my-2' variant="light">Vaciar Carrito</Button>
                </div>
                <div className='mt-5 d-inline'>
                    <Button onClick={createOrder} className='mx-2 my-2' variant="light">Generar orden</Button>
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
                
                show && <Order orderId={orderId} data={data}/>
                
                }
            </div>
        </div>
    )
}

export default Cart
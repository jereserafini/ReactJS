import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';

const ItemDetail = ({producto}) => {

    const {agregarAlCarrito} = useCartContext()

    const [show, setShow] = useState(true)

    const onAdd = (contador) => {
        setShow(false)
        agregarAlCarrito({...producto, cantidad: contador})
    }
    

    
    return (
        <div>
            
            <Card className='text-center container my-5 text-white bg-dark' style={{ width: '18rem' }}>
                <Card.Img variant="top pt-2" src={producto.image} />
                <Card.Body>
                    <Card.Title>{producto.producto}</Card.Title>
                    <Card.Text>
                        ${producto.precio}<br/>
                        {producto.descripcion}
                    </Card.Text>
                    {show ? <ItemCount onAdd={onAdd} min={1} max={10}/> : 
                    <div>
                        <Link to='/cart'><Button className='mx-2 my-2' variant="light">Terminar compra</Button></Link>
                        <Link to='/'><Button className='mx-2 my-2' variant="light">Continuar comprando</Button></Link>
                    </div>
                    }

                </Card.Body>
            </Card>

        </div>
    )
}

export default ItemDetail

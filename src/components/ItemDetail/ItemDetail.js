import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({producto}) => {

    const [show, setShow] = useState(true)

    const onAdd = (contador) => {
        setShow(false)
        /* sumarAlCarrito(...producto, contador) */
    }

    
    return (
        <div>
            
            <Card className='text-center container my-5' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.image} />
                <Card.Body>
                    <Card.Title>{producto.producto}</Card.Title>
                    <Card.Text>
                        ${producto.precio}<br/>
                        {producto.descripcion}
                    </Card.Text>
                    {show ? <ItemCount onAdd={onAdd} min={1} max={10}/> : 
                    <div>
                        <Link to='/cart'><Button className='mx-2 my-2' variant="outline-dark">Terminar compra</Button></Link>
                        <Link to='/'><Button className='mx-2 my-2' variant="outline-dark">Continuar comprando</Button></Link>
                    </div>
                    }

                </Card.Body>
            </Card>

        </div>
    )
}

export default ItemDetail

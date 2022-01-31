import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    return (
            <Card border="light" className='text-center container my-5 card text-white bg-dark' style={{ width: '18rem', height: '28rem'}}>
                <Card.Img variant="top pt-2" src={producto.image} />
                <Card.Body>
                    <Card.Title>{producto.producto}</Card.Title>
                    <Card.Text>
                        ${producto.precio}
                    </Card.Text>
                    <Link to={`/detalle/${producto.id}`}>
                        <Button id={producto.id} variant="light">Detalle del producto</Button>
                    </Link>
                </Card.Body>
            </Card>
    )
}

export default Item
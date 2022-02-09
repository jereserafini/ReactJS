import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
    return (
            <Card border="light" className='text-center container my-5 card text-white bg-dark' style={{ width: '18rem', height: '28rem'}}>
                <Card.Img variant="top pt-2" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.product}</Card.Title>
                    <Card.Text>
                        ${product.price}
                    </Card.Text>
                    <Link to={`/detalle/${product.id}`}>
                        <Button id={product.id} variant="light">Detalle del producto</Button>
                    </Link>
                </Card.Body>
            </Card>
    )
}

export default Item
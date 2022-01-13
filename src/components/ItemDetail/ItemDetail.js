import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({producto}) => {
    
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
                    <ItemCount min={1} max={10}/>
                </Card.Body>
            </Card>

        </div>
    )
}

export default ItemDetail

import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';

const ItemDetail = ({product}) => {

    const {addToCart} = useCartContext()

    const [show, setShow] = useState(true)

    const onAdd = (counter) => {
        setShow(false)
        addToCart({...product, quantity: counter})
    }
    

    
    return (
        <div>
            
            <Card border="light" className='text-center container my-5 text-white bg-dark' style={{ width: '18rem' }}>
                <Card.Img variant="top pt-2" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.product}</Card.Title>
                    <Card.Text>
                        ${product.price}<br/>
                        {product.description}
                    </Card.Text>
                    {show ? <ItemCount onAdd={onAdd} min={1} max={product.stock}/> : 
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

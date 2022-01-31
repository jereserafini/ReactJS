import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true);
    
    const {productoId} = useParams()
    
    useEffect(() => {
        
        const db = getFirestore();
        const queryProducto = doc(db, 'productos', productoId)
        getDoc(queryProducto)
        .then((resp) => setProducto({ id: resp.id, ...resp.data() }))
        .finally(() => setLoading(false))
        
    }, [productoId])
    
    
    return (
        <div className='container text-center mt-5'>
            {loading ? <Spinner className='mt-5' animation="border" variant="light" />
            :
            <ItemDetail producto={producto}/>
            
            }
        </div>
    )
}

export default ItemDetailContainer
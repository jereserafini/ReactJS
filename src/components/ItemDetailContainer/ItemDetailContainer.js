import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true);
    
    const {productId} = useParams()
    
    useEffect(() => {
        
        const db = getFirestore();
        const queryProduct = doc(db, 'products', productId)
        getDoc(queryProduct)
        .then((resp) => setProduct({ id: resp.id, ...resp.data() }))
        .catch(err => err)
        .finally(() => setLoading(false))
        
    }, [productId])
    
    
    return (
        <div className='container text-center mt-5'>
            {loading ? <Spinner className='mt-5' animation="border" variant="light" />
            :
            <ItemDetail product={product}/>
            
            }
        </div>
    )
}

export default ItemDetailContainer
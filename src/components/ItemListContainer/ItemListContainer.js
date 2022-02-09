import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


const ItemListContainer = ({greeting}) => {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    /* Guardo el parametro para utilizar la ruta */
    const {categoryId} = useParams()
    
    useEffect(() => {

        /* Traigo los datos de firestore */
        if (categoryId) {
            
            const db = getFirestore();
            const queryCollection = query(collection(db, 'products'), where('category', '==', categoryId));
            getDocs(queryCollection)
            .then((resp) => setProducts(resp.docs.map((prod) =>({ id: prod.id, ...prod.data() }))))
            .catch(err => err)
            .finally( ()=> setLoading(false))
            
        } else {
            
            const db = getFirestore();
            const queryCollection = query(collection(db, 'products'));
            getDocs(queryCollection)
            .then((resp) => setProducts(resp.docs.map((prod) =>({ id: prod.id, ...prod.data() }))))
            .catch(err => err)
            .finally( ()=> setLoading(false))
            
        }
        
        
    }, [categoryId])        
        
        
        return (
            <div className='container text-center mt-5'>


            <h1 className='text-white'>{greeting}</h1>

            {loading ? <Spinner className='mt-5' animation="border" variant="light" />
                :
                <ItemList products={products}/>
                
            }
            
        </div>
    )
}

export default ItemListContainer
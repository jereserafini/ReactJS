import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';



const ItemListContainer = ({greeting}) => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const {categoriaId} = useParams()
    
    useEffect(() => {
        if (categoriaId) {
            
            const db = getFirestore();
            const queryCollection = query(collection(db, 'productos'), where('categoria', '==', categoriaId));
            getDocs(queryCollection)
            .then((resp) => setProductos(resp.docs.map((prod) =>({ id: prod.id, ...prod.data() }))))
            .finally( ()=> setLoading(false))
            
        } else {
            
            const db = getFirestore();
            const queryCollection = query(collection(db, 'productos'));
            getDocs(queryCollection)
            .then((resp) => setProductos(resp.docs.map((prod) =>({ id: prod.id, ...prod.data() }))))
            .finally( ()=> setLoading(false))
            
        }
        
        
    }, [categoriaId])        
        
        
        return (
            <div className='container text-center mt-5'>


            <h1 className='text-white'>{greeting}</h1>

            {loading ? <Spinner className='mt-5' animation="border" variant="light" />
                :
                <ItemList productos={productos}/>
                
            }
            
        </div>
    )
}

export default ItemListContainer


// llamado al mock

/* import { getFetch } from '../../helpers/mock'; */

/* if (categoriaId) {            
    
    getFetch
    .then(resp => setProductos(resp.filter( prod => prod.categoria === categoriaId)))
    .finally( ()=> setLoading(false))
    
} else {            
    
    getFetch
    .then(resp => setProductos(resp))
    .finally( ()=> setLoading(false))            
            
        } */
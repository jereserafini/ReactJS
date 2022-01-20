import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from "react";
import { getFetch } from '../../helpers/mock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoriaId} = useParams()

    useEffect(() => {

        if (categoriaId) {            

            getFetch
            .then(resp => setProductos(resp.filter( prod => prod.categoria === categoriaId)))
            .finally( ()=> setLoading(false))

        } else {            

            getFetch
            .then(resp => setProductos(resp))
            .finally( ()=> setLoading(false))            
            
        }        
    }, [categoriaId])

    
    
    return (
        <div className='container text-center mt-5'>


            <h1 className='text-white'>{greeting}</h1>

            {loading ? <p>Cargando...</p>
                :
                <ItemList productos={productos}/>

            }
            
        </div>
    )
}

export default ItemListContainer

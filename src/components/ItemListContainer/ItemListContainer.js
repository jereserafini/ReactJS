import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from "react";
import { getFetch } from '../../helpers/mock';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        getFetch
        .then(resp => setProductos(resp))
        .finally( ()=> setLoading(false))
        
    }, [])

    return (
        <div className='container text-center mt-5'>

            <h1>{greeting}</h1>

            {loading ? <p>Cargando...</p>
                :
                <ItemList productos={productos}/>

            }
            
        </div>
    )
}

export default ItemListContainer

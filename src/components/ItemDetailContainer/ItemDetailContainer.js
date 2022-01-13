import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/mock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

        const [producto, setProducto] = useState({})

        const {productoId} = useParams()

        useEffect(() => {
            
            getFetch
            .then(resp => setProducto(resp.find(prod => prod.id === productoId)))

        }, [productoId])

    
    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer

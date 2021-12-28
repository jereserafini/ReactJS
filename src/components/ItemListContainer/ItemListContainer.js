import React from 'react'
import './ItemListContainer.css'


const ItemListContainer = ({greeting}) => {
    

    return (
        <div className='centrado mt-5'>

            <h1>{greeting}</h1>
            
        </div>
    )
}

export default ItemListContainer

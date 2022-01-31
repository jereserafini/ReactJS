import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
    return (
        <div className='d-flex flex-wrap mx-1 justify-content-around'>
            {productos.map(producto =>
                
                    <Item key={producto.id} producto={producto}/>
            
            )}
        </div>
    )
}

export default ItemList

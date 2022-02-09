import { memo } from 'react'
import Item from '../Item/Item'

const ItemList = memo( ({products}) => {
    return (
        <div className='d-flex flex-wrap mx-1 justify-content-around'>
            {products.map(product =>
                
                    <Item key={product.id} product={product}/>
            
            )}
        </div>
    )
})

export default ItemList

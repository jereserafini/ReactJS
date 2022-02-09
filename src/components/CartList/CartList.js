import { useCartContext } from "../../context/cartContext";
import { AiOutlineDelete } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';


const CartList = () => {

    const {removeItem, cartList} = useCartContext()

  return <div>
      {cartList.map( product =>
                        <div key={product.id} className='border border-secondary py-3 d-flex align-items-center'>
                            <div className='col-3'>Producto: {product.product}</div>
                            <div className='col-3'>Cantidad: {product.quantity}</div>
                            <div className='col-3'>Precio: ${product.price}</div>
                            <div className='col-3'><Button onClick={() => removeItem(product.id)} variant="outline-danger"><AiOutlineDelete/></Button></div>
                        </div>
                )}
  </div>;
};

export default CartList;

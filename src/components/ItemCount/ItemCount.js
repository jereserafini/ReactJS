import { useState } from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ({min, max, onAdd}) => {

    const [counter, setCounter] = useState(min)
    

    const addCounter = () =>{

        counter < max && setCounter(prev => prev + 1)

    }

    const subCounter = () =>{

        counter > min && setCounter(prev => prev - 1)

    }    

    

    return (

        <div className='text-center'>
            <h2>{counter}</h2>
            <Button className='mx-2' variant="light" onClick={subCounter}>-</Button>
            <Button className='mx-2' variant="light" onClick={addCounter}>+</Button><br/>
            <Button className='mx-2 my-2' variant="light" onClick={() => onAdd(counter)}>Agregar Carrito</Button>

        </div>        


    )
}

export default ItemCount

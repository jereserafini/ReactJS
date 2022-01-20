import React from 'react'
import { useState } from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ({min, max, onAdd}) => {

    const [contador, setContador] = useState(min)
    

    const sumaContador = () =>{

        contador < max && setContador(prev => prev + 1)

    }

    const restaContador = () =>{

        contador > min && setContador(prev => prev - 1)

    }    

    

    return (

        <div className='text-center'>
            <h2>{contador}</h2>
            <Button className='mx-2' variant="light" onClick={restaContador}>-</Button>
            <Button className='mx-2' variant="light" onClick={sumaContador}>+</Button><br/>
            <Button className='mx-2 my-2' variant="light" onClick={() => onAdd(contador)}>Agregar Carrito</Button>

        </div>        


    )
}

export default ItemCount

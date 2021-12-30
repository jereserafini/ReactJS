import React from 'react'
import { useState } from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ({min, max}) => {

    const [contador, setContador] = useState(min)
    const [show, setShow] = useState(false)

    const sumaContador = () =>{

        contador < max && setContador(prev => prev + 1)

    }

    const restaContador = () =>{

        contador > min && setContador(prev => prev - 1)

    }

    const mostrar = () => {
        setShow(!show)
    }

    return (

        <div className='text-center'>
            <h2>{contador}</h2>
            <Button className='mx-2' variant="outline-dark" onClick={restaContador}>-</Button>
            <Button className='mx-2' variant="outline-dark" onClick={sumaContador}>+</Button>
            <br/>
            <Button className='mx-2 my-2' variant="outline-dark" onClick={mostrar}>Agregar Carrito</Button>

            {
            show && <h3>Usted pidió {contador} productos</h3>
            }

        </div>        


    )
}

export default ItemCount

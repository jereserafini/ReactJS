import React from 'react';

const Order = ({orderId, data}) => {
  return <div className='border border-secondary container mb-5'>
    <h2 className='mt-5'>Muchas Gracias por su compra Sr/a: {data.name} {data.lastName}</h2><br/>
    <h3 className='mb-5'>Su codigo de compra es: {orderId}</h3>
  </div>;
};

export default Order;

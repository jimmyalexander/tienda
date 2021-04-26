import React from 'react'
import { useSelector } from 'react-redux';
import { Navbar } from './Navbar';

export const Car = () => {
  const { compras } = useSelector(state => state.car);

  return (
    <div>
      <Navbar />
      <div className='car_title'>
        <h1>Carrito</h1>
      </div>
      <div className='container_car'>
      {
        compras.map( ({id, nombre, precio, urlImg}) => {
          return(
            <div className='car' key={id}>
              <figure className='car-img'>
                <img src={urlImg} alt={nombre} />
              </figure>

              <div className='car-data'>
                <p>{nombre}</p>
                <p>1</p>
                <p>{ precio }</p>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

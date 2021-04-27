import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useHistory } from 'react-router';
import { types } from '../types/types';

export const Car = () => {
  const dispatch = useDispatch();
  const p = useHistory()
  const { compras } = useSelector(state => state.car);
  const [count, setCount] = useState(1) ;

  

  const handleSeguir = () => {
    localStorage.setItem('car', JSON.stringify())
    p.goBack();
  }
  const handleVaciar = () => {
    dispatch({
      type: types.cleanCar
    })

  }
  return (
    <div className='component_car'>
      <div className='car_title'>
        <h1>Carrito</h1>
      </div>
      
      <div className='container'>
        <div className='container_car'>
          {
            compras.map( ({id, nombre, precio, urlImg, precentacion}) => {
              return(
                <div className='car' key={id}>
                  <figure className='car-img'>
                    <img src={urlImg} alt={nombre} />
                  </figure>

                  <div className='car-data'>
                    <p>{nombre}</p>
                    <p>{ precio }</p>
                    <p><button onClick={ () => {
                       setCount(
                        count + 1
                      )
                    }} className='mas'>+</button></p>
                    <p>{ count }</p>
                    <p>${ precio * count }</p>
                    
                  </div>
                </div>
              )
            })
          }
        </div>

        
        <div className='estado-compra'>
          <button>Finalizar compra</button>
          <button onClick={ handleVaciar }>Vaciar carrito</button>
          <button onClick={ handleSeguir}>Seguir comprando</button>
        </div>
      
    </div>
    </ div>
  )
}

    
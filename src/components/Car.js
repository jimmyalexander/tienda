import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useHistory } from 'react-router';
import { types } from '../types/types';

export const Car = () => {
  const dispatch = useDispatch();
  const p = useHistory()
  const { compras } = useSelector(state => state.car);

  

  const handleSeguir = () => {
    p.push('/tienda');
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
            
            compras.map( ({id, nombre, precio, urlImg, cantidad}) => {
              const hancli = () => {
                cantidad++
              }
              return(
                <div className='car' key={id}>
                  <figure className='car-img'>
                    <img src={urlImg} alt={nombre} />
                  </figure>

                  <div className='car-data'>
                    <p>{nombre}</p>
                    <p>{ precio }</p>
                    <p><button onClick={ hancli } className='mas'>+</button></p>
                    <p>{ cantidad }</p>
                    <p>${ precio * cantidad}</p>
                    
                  </div>
                </div>
              )
            })
          }
        </div>

        
        <div className='estado-compra'>
          <button onClick={ handleVaciar }>Vaciar carrito</button>
          <button onClick={ handleSeguir}>Seguir comprando</button>
          <div className='form'>
            <form action="https://www.paypal.com/es/cgi-bin/webscr" method="post">
                <input type="hidden" name="cmd" value="_xclick" />

                <input type="hidden" name="business" value="jkastiblanco@gmail.com" />

                <input type="hidden" name="item_name" value="Nombre del producto" />

                <input type="hidden" name="currency_code" value="USD" />

                <input type="hidden" name="amount" value="100" />

                <input type="hidden" name="return" value="http://localhost:3000/tienda/car" />

                <input type="hidden" name="cancel_return" value="http://localhost:3000/tienda/car" />

                <input className='button-img' formTarget='blank' type="image" src="https://www.paypalobjects.com/es_ES/ES/i/btn/btn_buynowCC_LG.gif" name="submit" alt="PayPal. La forma rápida y segura de pagar en Internet."/>
        </form>
          </div>

        </div>
      
    </div>

    
    </ div>
  )
}

    
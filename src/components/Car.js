import React from 'react';
import Swal from 'sweetalert2';

import { useDispatch, useSelector } from 'react-redux';
import {  useHistory } from 'react-router';
import { removeToCar } from '../actions/car';
import { TitleNav } from './TitleNav';

export const Car = () => {
  const dispatch = useDispatch();
  const p = useHistory()
  const { compras } = useSelector(state => state.car);
  const  auth = useSelector(state => state.auth);




  const handleSeguir = () => {
    p.push('/tienda');
  }
  const handleVaciar = () => {
    dispatch(removeToCar())

  }

  const handleFacturar = (e) => {
    if(auth?.uid && compras.length > 0){
      p.push('/tienda/car/facturar');
    }
    else if( auth?.uid && compras.length === 0){
      Swal.fire('¡Upsss!', 'Primero debes agregar productos a tu carrito', 'error','1500');
    }
    else{
      Swal.fire('¡Upsss!', 'Primero debes iniciar sesión', 'error','1500');
      p.push('/tienda/login');
    }
    
  }
  return (
    <div className='component_car'>
      <TitleNav name='Carrito' />
      
      <div className='container'>
        <div className='container_car'>
          {
            
            compras.map( ({id, nombre, precio, urlImg, cantidad}) => {
              const hancli = () => {
                console.log('mas')
              }
              return(
                <div className='car' key={id}>
                  <figure className='car-img'>
                    <img src={urlImg} alt={nombre} />
                  </figure>

                  <div className='car-data'>
                    <p>{nombre}</p>
                    <p>{ precio }</p>
                    <p><button onClick={ hancli } className='mas menos'>-</button></p>
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
          <button onClick={ handleFacturar }>Facturar</button>
          <button onClick={ handleVaciar }>Vaciar carrito</button>
          <button onClick={ handleSeguir}>Seguir comprando</button>
        </div>
      
    </div>

    
    </ div>
  )
}


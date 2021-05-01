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
    if(auth?.uid){
      p.push('/tienda/car/facturar');
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
          <button onClick={ handleFacturar }>Facturar</button>
          <button onClick={ handleVaciar }>Vaciar carrito</button>
          <button onClick={ handleSeguir}>Seguir comprando</button>
        </div>
      
    </div>

    
    </ div>
  )
}

    
/* 
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
          </div> */
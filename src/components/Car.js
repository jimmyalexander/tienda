import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

import { useDispatch, useSelector } from 'react-redux';
import {  useHistory } from 'react-router';
import { addToCar, removeToCar } from '../actions/car';
import { TitleNav } from './TitleNav';
import { types } from '../types/types';

export const Car = () => {
  const dispatch = useDispatch();
  const p = useHistory()

  const { data } = useSelector(state => state.productos);
  const { compras } = useSelector(state => state.car);
  const  auth = useSelector(state => state.auth);



  useEffect(() => {

    dispatch({
      type: types.addFilter, // cargamos la data en estado global filter que se encargara de mostrar busquedas
      payload: data
    }) 

  } ,[compras,data,dispatch])

  const handleSeguir = () => {
    dispatch({
      type: types.addFilter, // cargamos la data en estado global filter que se encargara de mostrar busquedas
      payload: data
    }) 
    p.push('/tienda');
  }

  const handleVaciar = () => {
    dispatch(removeToCar())
    p.push('/tienda');
    window.location.reload();
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

  const prodDelete = (id) =>{
   const Delete = compras.filter( prod => prod.id !== id);
    dispatch( addToCar(Delete));    
  }
 
  return (
    <div className='component_car'>
      <TitleNav name='Carrito' />
      
      <div className='container'>
        <div className='container_car'>
          <div className="car">
            <p className='item title'>Producto</p>
            <p className='item title'>Nombre</p>
            <p className='item title'>Cantidad</p>
            <p className='item title'>Total</p>
            <p className='item title'>Elminar</p>
          </div>
          {            
            compras.map( ({id, nombre, precio, urlImg,cantidad= 1 }) => {
              return(
                <div className='car' key={id}>
                  <div className="car-img">
                    <img src={urlImg} alt={nombre} />
                  </div>
                  <div className="item nombre">
                    <p>{nombre}</p>
                  </div>
                  <div className="item cantidad">
                    <p>{cantidad}</p>
                  </div>

                  <div className="item total">
                    <p>{precio * cantidad}</p>
                  </div>

                  <div className="item eliminar">
                    <button
                      onClick={(e)=> {
                        prodDelete(id)
                      }}
                    >Eliminar
                    </button>
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


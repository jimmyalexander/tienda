import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import { useDispatch, useSelector } from 'react-redux';
import {  db } from '../firebase/firebaseConfig';
import { types } from '../types/types';
import { Carousel } from './Carousel';
import { Loader } from './Loader';
import { Navbar } from './Navbar';
import { Search } from './Search';
import { addToCar } from '../actions/car';
import { Footer } from './Footer';

export const HomeFrutas = () => {
  const dispatch = useDispatch();
  const { filtros } = useSelector(state => state.filtros);
  const { loading, data } = useSelector(state => state.productos);
  const { compras } = useSelector(state => state.car);
  const [count, setCount] = useState({
    id:'',
    cant: 1,

  })

  
  useEffect(() => {
    db.collection("frutas").onSnapshot((querySnapshot) => { 
      let list = [];
      querySnapshot.forEach((fruta) => { //traemos uno a uno objetos de la BD
          let es = false;
          compras.map(item => { //valido si el objeto ya esta en el carro el estado sera true 
            if(item.id === fruta.id){ //y asi podre manejar el estado del boton agregar
              es = true
            }
            return  item
          });
          const id = fruta.id;
          const nombre = fruta.data().Nombre;
          const precentacion = fruta.data().Venta;
          const precio = fruta.data().Precio * 1000;
          const urlImg = fruta.data().Url;
          const categoria = fruta.data().Categoria;
          const estado = es
          const obj = { id, nombre, precentacion, precio, urlImg, categoria,estado }
          list.push(obj); // inserto mi obj que contiene la data en el array list
          
        })
        
        dispatch({
          type: types.cargaData,
          payload: false
        })
        dispatch({
          type: types.addData, //cargamos la data en el estado global
          payload: list
        })
    })
  },[dispatch,compras])
  const [active, setActive] = useState(false)



  useEffect(() => {
    if(filtros.length === 0 ){
      dispatch({
        type: types.addFilter, // cargamos la data en estado global filter que se encargara de mostrar busquedas
        payload: data
      }) 
    }
  }, [ dispatch, data, filtros  ])

  useEffect(() => {
    if(compras.length > 0 && filtros.length > 100){
      dispatch({
        type: types.addFilter,
        payload: data
      }) 
    }
  }, [ dispatch, compras, data,filtros  ])


  


  const addCar = (obj) => {
    setActive(!active)
    const arr=
      [
        {
           id : obj.id,
           nombre : obj.nombre,
           precentacion : obj.precentacion,
           precio : obj.precio,
           urlImg : obj.urlImg,
           categoria : obj.categoria,
           estado : true,
           cantidad: count.cant
        },...compras
      ]
     
      dispatch( addToCar(arr))
      setCount({
        id:'',
        cant: 1,
        estado: false
      })

      Swal.fire({
        title: `${obj.nombre}!`,
        text: `fue añadido`,
        icon: 'success',
        timer: 1500
      })
  }
  
  const handleMas = (id) => {
    setCount({
      id:id,
      cant: count.cant + 1,
      estado: false
    })
  }

  const handleMenos = (id) => {
    setCount({
      id:id,
      cant: count.cant === 1 ? 1 : count.cant - 1,
      estado: false
    })
  }

  return (
    <div>
      <Navbar />
      <Carousel />
      <Search />
      <div>
        {
           loading ? <Loader /> : '' 
        }
      </div>
      <div className='container-productos'>
          {
            filtros.map( (prod) => {
              return(
                <div className='productos' key={prod.id}>
                  <figure>
                    <p className='productos-ok'>{ prod.estado  ? `✔️` : '' }</p>
                    <img src={ prod.urlImg} alt={prod.nombre} />
                  </figure>
                  <div className='productos-datos'>
                    <p>Nombre: { prod.nombre }</p>
                    <p>Precio: { prod.precio}</p>
                    <p>Precentación: { prod.precentacion }</p>
                    <p>Cantidad: {count.id === prod.id ? count.cant : compras.map(item => {if(item.id === prod.id){return item.cantidad}}) }<button className='btn-cantidad' disabled={prod.estado} onClick={(e) => {
                      handleMas(prod.id)
                    }}>+</button> 
                     
                     <button className='btn-cantidad' disabled={prod.estado} onClick={(e) => {
                        handleMenos(prod.id)
                     }}>-</button> 
                     </p>
                    <button disabled={ prod.estado }  onClick={ (e) => {
                      e.target.disabled = true
                      e.target.innerText = 'Añadido'
                      addCar(prod)
                    } } className='btn btn-add'>{ prod.estado ? 'Añadido' : 'Agregar al carrito' }</button>
                  </div>
                </div>
              )
            } )
          }
      </div>
      
      <Footer />
    </div>
  )
}



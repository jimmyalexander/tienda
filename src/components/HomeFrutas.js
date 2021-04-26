import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  db } from '../firebase/firebaseConfig';
import { types } from '../types/types';
import { Carousel } from './Carousel';
import { Loader } from './Loader';
import { Navbar } from './Navbar';
import { Search } from './Search';

export const HomeFrutas = () => {
  const dispatch = useDispatch();
  const [addcar, setAddcar] = useState([])
  const { filtros } = useSelector(state => state.filtros);
  const { loading, data } = useSelector(state => state.productos);

   
  useEffect(() => {
    db.collection("frutas").onSnapshot((querySnapshot) => { 
      let list = [];
      querySnapshot.forEach((fruta) => { //traemos uno a uno objetos de la BD
          const id = fruta.id;
          const nombre = fruta.data().Nombre;
          const precentacion = fruta.data().Venta;
          const precio = fruta.data().Precio * 1000;
          const urlImg = fruta.data().Url;
          const categoria = fruta.data().Categoria;
          const obj = { id, nombre, precentacion, precio, urlImg, categoria }
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
  },[dispatch])

  useEffect(() => {
    dispatch({
      type: types.addFilter, // cargamos la data en estado global filter que se encargara de mostrar busquedas
      payload: data
    }) 
        dispatch({
          type: types.addCar,
          payload: addcar
        })
  }, [ dispatch, addcar, data ])

 
  const addCar = (obj) => {
    setAddcar(
      [
        {
           id : obj.id,
           nombre : obj.nombre,
           precentacion : obj.venta,
           precio : obj.precio * 1000,
           urlImg : obj.urlImg,
           categoria : obj.categoria,
        },
        ...addcar
      ]
    )
  }
 
  return (
    <div>
      <Carousel />
      <Navbar />
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
                    <img src={ prod.urlImg} alt={prod.nombre} />
                  </figure>
                  <div className='productos-datos'>
                    <p>Nombre: { prod.nombre }</p>
                    <p>Precio: { prod.precio}</p>
                    <p>Precentación: { prod.precentacion }</p>
                    <button onClick={ () => {
                      addCar(prod)
                    } } className='btn btn-add'>Agregar al carrito</button>
                  </div>
                </div>
              )
            } )
          }
      </div>
    </div>
  )
}



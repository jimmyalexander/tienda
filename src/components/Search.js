import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { types } from '../types/types'

export const Search = () => {
  const { data } = useSelector(state => state.productos);
  const dispatch = useDispatch()
  const [change, setChange] = useState('')

  const handleChange =async (e) => {
    await setChange(e.target.value.toLowerCase())
    await setChange(e.target.value)
    filtrarNombre(); 
  }
  const filtrarNombre = () => {
    const searching = data.filter(item  =>  { 
    if(item.nombre.includes(change)){ //muestro productos que incluyan las palabras escritas en el input
          return item
      }
    })
      dispatch({
        type: types.addFilter, 
        payload: searching //le envio al estado filter los objetos que coinciden con la busqueda
      })
      
  }
  
  const handleInput = (e) => {
     const filt =  data.filter( item => {
      if( e.target.value === 'tres' && item.precio <= 3000){
        setChange('');
        return item
      }
      else if(e.target.value === 'cinco' && item.precio > 3000 && item.precio <= 5000){
        setChange('');

        return item
      }
      else if(e.target.value === 'ocho' && item.precio > 5000 && item.precio <= 8000){
        setChange('');

        return item
      }
      else if(e.target.value === 'veinte' && item.precio > 8000 && item.precio <= 20000){
        setChange('');

        return item
      }
      else if(e.target.value === 'vacio'){
        setChange('');

        return item
      }
    })
    
    dispatch({
      type: types.addFilter, 
      payload: filt //le envio al estado filter los objetos que coinciden con la busqueda
    })
  }

  return (
    <div className='container_search'>
       <div className='form' >
         <input placeholder='Buscar producto...' onChange={  handleChange } value={change} type="search" id="site-search" name="q"
          aria-label="Search through site content" />
      </div>

      <div className='container_select'>
        <select className='select' onChange={ handleInput } >
          <option value='vacio'>Filtrar precio</option>
          <option value='tres'>$1000 a $3000</option>
          <option value='cinco'>$3000 a $ 5000</option>
          <option value='ocho'>$5000 a $ 8000</option>
          <option value='veinte'>$8000 a $ 20000</option>
        </select>
      </div>
    </div>
  )
}

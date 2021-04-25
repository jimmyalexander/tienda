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
      if(item.categoria === e.target.value){
        return item
      }
    })
    dispatch({
      type: types.addFilter,
      payload: filt
    })
    if(e.target.value === 'vacio'){
      dispatch({
        type: types.addFilter,
        payload: data
      })
    }
  }

  return (
    <div className='container_search'>
       <form className='form' >
         <input placeholder='Buscar producto...' onChange={  handleChange } value={change} type="search" id="site-search" name="q"
          aria-label="Search through site content" />
      </form>

      <div className='container_select'>
        <select className='select' onChange={ handleInput } >
          <option value='vacio'>Filtrar ....</option>
          <option value='fruta'>Fruta</option>
          <option value='verdura'>Verdura</option>
        </select>
      </div>
    </div>
  )
}

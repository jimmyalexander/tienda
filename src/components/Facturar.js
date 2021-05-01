import React from 'react'
import { TitleNav } from './TitleNav'

export const Facturar = () => {
  return (
    <div className='component_facturar' >
      <TitleNav name='Facturación' />
      
      <div className='facturar'>
        <div className='container_form'>
        <h2>Formulario</h2>
          <form>
            <label>Nombres</label>
            <input type='text' />

            <label>Apellidos</label>
            <input type='text' />

            <label>Número de cedula</label>
            <input type='number' />

            <label>Telefono:</label>
            <input type='tel' />

            <label>Celular</label>
            <input type='tel' />

            <label>Dirección</label>
            <input type='text' />

            
          </form>
        </div>
      </div>
    </div>
  )
}

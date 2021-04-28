import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export const Login = () => {
  const p = useHistory();

  const handleIniciar  = () => {
    p.push('/tienda/car')
  }
  return (
    <div>
    <div className='grilla'>
      <div className='item_1 grilla-header'>
        <Link to='/tienda' ><p>DF</p></Link>
      </div>
      <div className='item_2 grilla-img'>
        <figure>
          <img src='https://png.pngtree.com/thumb_back/fw800/background/20190530/pngtree-fruits-3d-paper-cut-background-image_117381.jpg' alt='img'/>
        </figure>
      </div>
      <div className='item_3 grilla-form'>
        <form>
          <div className='form_title'>
            <h2>Iniciar sesión</h2>
          </div>
          
          <div className='form_data'>
            <label>E-mail</label>
            <input type='text' />
            <label>Contraseña</label>
            <input type='password' />
            <Link to='/tienda/register'>¿Eres nuevo? Registrate</Link>
          </div>

          <div className='form_button'>
            <button onClick={ handleIniciar } type='button'>Iniciar Sesión</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

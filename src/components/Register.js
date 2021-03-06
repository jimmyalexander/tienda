import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { startRegisterWithEmailPasswordName } from '../actions/auth';
import { useForm } from '../hooks/useForm';
import { Footer } from './Footer';


export const Register = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  const p = useHistory();
  const [ formValues, handleInputChange, reset] = useForm({
    nombre: '',
    email: '',
    contraseña: '',
    contraseña2: ''
  });
  let { nombre, email, contraseña, contraseña2 } = formValues;
  const [messageError, setMessageError] = useState('');


  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if(contraseña.includes(contraseña2) && contraseña2 !== ''){
      dispatch(
        startRegisterWithEmailPasswordName(email,contraseña,nombre, contraseña2)
      )
      if(auth?.uid){
        reset();
      }
    }
    else{
      setMessageError('¡Upss contraseñas no coinciden!');
    }
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
          <form onSubmit={ handleSubmitRegister }>
          
            <div className='form_title'>
              <h2>Registro</h2>
            </div>
            
            <div className='form_data'>
              <label>Nombre</label>
              <input
                required 
                type='text'
                autoComplete='off'
                name='nombre'
                value={nombre}
                onChange={  handleInputChange }
              />
              <label>E-mail</label>
              <input
                required 
                type='text'  
                autoComplete='on'
                name='email'
                value={email}
                onChange={  handleInputChange }
              />
              <label>Contraseña</label>
              <input
                required 
                type='password'  
                autoComplete='off'
                name='contraseña'
                value={contraseña} 
                onChange={  handleInputChange }
              />
              <label>Confirma Contraseña</label>
              {
                messageError
              }
              <input
                required 
                type='password'
                name='contraseña2'  
                value={contraseña2} 
                onChange={  handleInputChange }
              />
            </div>

            <div className='form_button'>
              <button  type='submit'>Registrarse</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

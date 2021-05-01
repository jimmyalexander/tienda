import React from 'react';
import { Link, useHistory} from 'react-router-dom';
import Icon from './Iconos';
import { mdiFacebook } from '@mdi/js';
import { startGoogleLogin, startLoginEmailPassword } from '../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../hooks/useForm';

export const Login = () => {
  const p = useHistory();
  const  { uid } = useSelector(state => state.auth)
  let dispatch = useDispatch();
  const { loading } = useSelector(state => state.ui)

  const [ formValues, handleInputChange ] = useForm({
    email: '',
    contraseña: ''
  });

  const { email, contraseña  } = formValues;

  const handleIniciar  = (e) => {
    e.preventDefault()
    dispatch(
      startLoginEmailPassword(email, contraseña)  
    )
    p.push('/tienda/car')
  }

  const handleGoogleLogin = async(e) => {
    dispatch( startGoogleLogin() );
    if( uid !== '' ){
      p.goBack('/tienda');
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
        <form onSubmit={ handleIniciar }>
          <div className='form_title'>
            <h2>Iniciar sesión</h2>
          </div>
          
          <div className='form_data'>
            <label>E-mail</label>
            <input 
              type='text'
              name='email'
              value={ email }
              onChange={ handleInputChange } 
            />
            <label>Contraseña</label>
            <input 
              type='password'
              name='contraseña'
              value={ contraseña }
              onChange={ handleInputChange } 
            />
            <Link to='/tienda/register'>¿Eres nuevo? Registrate</Link>
          </div>


          <div className='auth__social-networks'>
            <p>Iniciar con redes sociales</p>
            
            <div className='social'>
              <div className="google-btn" onClick={ handleGoogleLogin }>
                <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                </div>
              </div>

              <div  className='container_facebook'>
                <Icon  className='burguer' size='45' icon={mdiFacebook} color='white' />
              </div>
            </div>
        </div>


          <div className='form_button'>
            <button disabled={ loading }  type='submit'>Iniciar Sesión</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

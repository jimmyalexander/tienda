import React, {  useState } from 'react';
import Icon from './Iconos';
import { mdiCart, mdiMenu } from '@mdi/js';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { types } from '../types/types';
import { finishGoogleLogin } from '../actions/auth';

export const Navbar = () => {
  const dispatch = useDispatch();
  const [navActive, setNavActive] = useState(false);
  const [scroll, setScroll] = useState(0);
  
  const { data } = useSelector(state => state.productos);
  const auth = useSelector(state => state.auth);
  const { compras } = useSelector(state => state.car);
  
  const handleClick = (e) =>{
    setNavActive( !navActive);
  }

  
  const handleFrutas = (e) => {
    const filt =  data.filter( item => {
      if(item.categoria === e.target.name){
        return item;
      }
    })

    dispatch({
      type: types.addFilter,
      payload: filt
    })

    setNavActive(!navActive);
  }


  const handleFrutasTodos = (e) => {

    dispatch({
      type: types.addFilter,
      payload: data
    })

    setNavActive(!navActive);

  }


  window.onscroll = function() {
    setScroll(window.scrollY)
  };
  
  const handleCerrarSesion = () =>{
    finishGoogleLogin()
  }
  
  return (
    <div  className={scroll > 1 ? 'componet_nav fixed': 'componet_nav'}>
      <div className='nav-icon'>
        <Link  onClick={() => {
          dispatch({
            type: types.addFilter,
            payload: data
          })
        }}  to='/tienda'>DF</Link>
      </div>
      
      <div  className='container_burguer'>
        <Icon onClick={ handleClick } title='menú' className='burguer' icon={mdiMenu} color='white' />
      </div>

      <div className={ navActive ? 'container_nav active-nav': 'container_nav' }>

        <nav className='nav-anclas'>
          <ul>
            <Link to='#' name='todos' onClick={ handleFrutasTodos} >Todos</Link>
            <Link to='#' name='fruta' onClick={ handleFrutas} >Frutas</Link>
            <Link to='#' name='verdura' onClick={ handleFrutas} >Verduras</Link>
            <Link to='#' name='carnes' onClick={ handleFrutas }>Carne y Pollo</Link>
            <Link to='/tienda/car'><Icon title='carrito de compras' icon={mdiCart} /><p className='cantidad'>{ compras.length > 0 ? compras.length : '' }</p></Link>
          </ul>
        </nav>

        <div className='nav-login'>
          <div className='login'>
            {
              auth?.uid
              ?' '
              : <Link to='/tienda/register'>Registrarse</Link>
                
            }
            {
               auth?.uid
               ?' '
               :<Link to='/tienda/login'>Iniciar Sesión</Link>
            }

            {
               auth?.uid
               ?<Link onClick={ handleCerrarSesion} to='/tienda'>Cerrar Sesión</Link>
               :' '
            }
            {
               auth?.uid
               ?<Link to='/tienda'>{auth.name}</Link>
               :' '
            }
          </div>
        </div>
      </div>
    </div>
  )
}

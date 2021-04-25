import React, { useState } from 'react';
import Icon from './Iconos';
import { mdiCart, mdiMenu } from '@mdi/js';
import { useSelector } from 'react-redux';

export const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const { compras } = useSelector(state => state.car);


  const handleClick = (e) =>{
    setNavActive( !navActive)
  }
  return (
    <div className='componet_nav'>
      <div className='nav-icon'>
        <a>DF</a>
      </div>
      
      <div  className='container_burguer'>
        <Icon onClick={ handleClick } className='burguer' icon={mdiMenu} color='white' />
      </div>

      <div className={ navActive ? 'container_nav active-nav': 'container_nav' }>

        <nav className='nav-anclas'>
          <ul>
            <a href='#'>Frutas</a>
            <a href='#'>Verduras</a>
            <a href='#'>Carne y Pollo</a>
            <a href='#'><Icon icon={mdiCart} /><p className='cantidad'>{ compras.length > 0 ? compras.length : '' }</p></a>
          </ul>
        </nav>

        <div className='nav-login'>
          <div className='login'>
            <a href='#'>Registrarse</a>
            <a href='#'>Iniciar Sesión</a>
          </div>
        </div>
      </div>
    </div>
  )
}

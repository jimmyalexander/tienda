import React, { useState } from 'react';
import Icon from './Iconos';
import { mdiCart, mdiMenu } from '@mdi/js';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const { compras } = useSelector(state => state.car);


  const handleClick = (e) =>{
    setNavActive( !navActive)
  }
  return (
    <div className='componet_nav'>
      <div className='nav-icon'>
        <Link to='/tienda'>DF</Link>
      </div>
      
      <div  className='container_burguer'>
        <Icon onClick={ handleClick } className='burguer' icon={mdiMenu} color='white' />
      </div>

      <div className={ navActive ? 'container_nav active-nav': 'container_nav' }>

        <nav className='nav-anclas'>
          <ul>
            <Link to='#'>Frutas</Link>
            <Link to='#'>Verduras</Link>
            <Link to='#'>Carne y Pollo</Link>
            <Link to='/tienda/car'><Icon icon={mdiCart} /><p className='cantidad'>{ compras.length > 0 ? compras.length : '' }</p></Link>
          </ul>
        </nav>

        <div className='nav-login'>
          <div className='login'>
            <Link to='#'>Registrarse</Link>
            <Link to='#'>Iniciar Sesión</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

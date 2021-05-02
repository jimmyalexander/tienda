import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const TitleNav = ({name}) => {
  const auth = useSelector(state => state.auth);

  return (
    <div className='component_car'>
      <div className='car_title'>
        <h1>{name}</h1>
        
          {
            auth?.uid
            ?<Link to='/tienda'>{auth.name}</Link>
            :' '
         }
        
      </div>
    </div>
  )
}

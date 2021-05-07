import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Car } from '../components/Car'
import { Facturar } from '../components/Facturar'
import { HomeFrutas } from '../components/HomeFrutas'
import { Login } from '../components/Login'
import { Register } from '../components/Register'

export const DashboardRoutes = ({isAuthenticated}) => {
  return (
   
     <div>
      <div>
        <Switch>
          <Route exact path='/tienda/car' component={Car} />
          <Route exact path='/tienda' component={HomeFrutas} />
          {
            isAuthenticated
            ? <Redirect to='/tienda/login' />
            :
            <Route  path='/tienda/register' component={Register} />
          }

          {
            isAuthenticated
            ? <Redirect to='/tienda' />
            :
            <Route  path='/tienda/login' component={Login} />
          }

          <Route exact path='/tienda/car/facturar' component={ Facturar } />
        </Switch>
      </div>
    </div>
   

   
  )
}

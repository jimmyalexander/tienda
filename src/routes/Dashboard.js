import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Car } from '../components/Car'
import { HomeFrutas } from '../components/HomeFrutas'
import { Login } from '../components/Login'
import { Register } from '../components/Register'

export const DashboardRoutes = () => {
  return (
   
     <div>
      <div>
        <Switch>
          <Route exact path='/tienda/car' component={Car} />
          <Route exact path='/tienda' component={HomeFrutas} />
          <Route exact path='/tienda/register' component={Register} />
          <Route exact path='/tienda/login' component={Login} />
        </Switch>
      </div>
    </div>
   

   
  )
}

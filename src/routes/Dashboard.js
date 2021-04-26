import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Car } from '../components/Car'
import { HomeFrutas } from '../components/HomeFrutas'

export const DashboardRoutes = () => {
  return (
   
     <div>
      <div>
        <Switch>
          <Route exact path='/tienda/car' component={Car} />
          <Route exact path='/tienda' component={HomeFrutas} />
        </Switch>
      </div>
    </div>
   

   
  )
}

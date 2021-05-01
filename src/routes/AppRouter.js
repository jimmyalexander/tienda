import React, { useEffect, useState } from 'react';
import { firebase } from '../firebase/firebaseConfig';

import { useDispatch } from 'react-redux';
import { BrowserRouter as Router,
  Route, Switch } from 'react-router-dom';
import { login } from '../actions/auth';
import { DashboardRoutes } from './Dashboard';

export const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
   const dispatch = useDispatch()


  useEffect(() => {
    firebase.auth().onAuthStateChanged( (user) => { //observer que usa firebase para saber si se esta autenticado o no
      if ( user?.uid) { // si mi user.uid existe entonces hago dispatch a redux del user.uid y el displaName
        dispatch( login( user.uid, user.displayName) );
        setIsLoggedIn( true )
      }
      else{
        setIsLoggedIn( false );
      }
    })
  }, [ dispatch, setIsLoggedIn ])
  

  return (
    <Router >
      <div>
        <Switch>
          <Route path='/tienda' isAuthenticated={isLoggedIn} component={ DashboardRoutes } />
        </Switch>
      </div>
    </Router>
  )
}




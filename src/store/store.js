import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { carReducer } from '../reducers/carReducer';

import { dataSearchReducer } from '../reducers/dataSearchReducer';
import { filterName } from '../reducers/filterName';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
  productos: dataSearchReducer,
  filtros : filterName,
  car: carReducer,
  auth: authReducer,
  ui: uiReducer
  
})

export const store = createStore( 
  reducers,
  composeEnhancers(
    applyMiddleware( thunk )
  )
  );

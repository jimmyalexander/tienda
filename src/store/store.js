import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { car } from '../reducers/car';
import { dataSearchReducer } from '../reducers/dataSearchReducer';
import { filterName } from '../reducers/filterName';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
  productos: dataSearchReducer,
  filtros : filterName,
  car: car,
  
})

export const store = createStore( 
  reducers,
  composeEnhancers(
    applyMiddleware( thunk )
  )
  );

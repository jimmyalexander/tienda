import { types } from "../types/types"

const initialState = {
  compras: []
}

export const car = ( state = initialState, action ) => {
  switch (action.type){
    case types.addCar:
      return{
        ...state,
       compras :action.payload 
      }
    case types.cleanCar:
      return{
        compras: []
      }
      default:
        return state
  }
}
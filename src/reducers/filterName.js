import { types } from "../types/types"

const initialState = {
  filtros: []
}

export const filterName = ( state = initialState, action ) => {
  switch (action.type){
    case types.addFilter:
      return{
        ...state,
        filtros: action.payload
      }
   
      default:
        return state
  }
}
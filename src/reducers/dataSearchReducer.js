import { types } from "../types/types"

const initialState = {
  data: [],
  loading: true
}

export const dataSearchReducer = ( state = initialState, action ) => {
  switch (action.type){
    case types.addData:
      return{
        data: action.payload,
      }
    
      case types.cargaData:
        return{
          ...state,
          loading: action.payload
        }
   
      default:
        return state
  }
}
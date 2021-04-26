import { types } from "../types/types";

export const addToCar  = ( obj ) => ({
  type: types.add,
  payload: obj
})

export const removeToCar  = (  ) => ({
  type: types.remove,
  payload: false
})


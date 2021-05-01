import { types } from "../types/types";

export const addToCar  = ( obj ) => ({
  type: types.addCar,
  payload: obj
})

export const removeToCar  = (  ) => ({
  type: types.cleanCar,
  payload: false
})


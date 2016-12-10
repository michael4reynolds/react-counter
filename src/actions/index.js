import {INC_ACTION, DEC_ACTION} from "./types"

export const increaseCount = () => {
  return {
    type: INC_ACTION,
    payload: 1
  }
}

export const decreaseCount = () => {
  return {
    type: DEC_ACTION,
    payload: -1
  }
}

export const incrementAsync = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increaseCount())
    }, 1000)
  }
}
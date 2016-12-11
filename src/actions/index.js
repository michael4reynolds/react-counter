import {INC_ACTION, DEC_ACTION, INCREMENT_ASYNC} from "./types"

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
  return {
    type: INCREMENT_ASYNC
  }
}
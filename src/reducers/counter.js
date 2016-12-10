import {INC_ACTION, DEC_ACTION} from '../actions/types'

export default function (state = 0, action) {
  switch (action.type) {
    case INC_ACTION:
    case DEC_ACTION:
      return state += action.payload
    default:
      return state
  }
}
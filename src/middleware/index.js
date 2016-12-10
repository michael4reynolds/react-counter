export const logger = ({dispatch}) => next => action => {
  console.log(`ACTION_CALLED: ${action.type} with payload ${action.payload}`)
  next(action)
}

export const superstitiousMode = ({dispatch, getState}) => next => action => {
  if (getState().counter + action.payload === 13) {
    const newAction = {...action, payload: action.payload * 2}
    dispatch(newAction)
  } else {
    next(action)
  }
}
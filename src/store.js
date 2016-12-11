import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {logger, superstitiousMode} from './middleware'
import reducers from './reducers'

const store = createStore(
  reducers,
  applyMiddleware(thunk, logger, superstitiousMode)
)

export default store
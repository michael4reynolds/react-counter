import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {logger, superstitiousMode} from './middleware'
import reducers from './reducers'

const createStoreWithMiddleware =
  applyMiddleware(thunk, logger, superstitiousMode)(createStore)

export default createStoreWithMiddleware(reducers)
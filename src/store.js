import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {logger, superstitiousMode} from './middleware'
import reducers from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, logger, superstitiousMode)
)
sagaMiddleware.run(rootSaga)

export default store
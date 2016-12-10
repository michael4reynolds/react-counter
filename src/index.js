import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {logger, superstitiousMode} from './middleware'

import App from './components/App';
import './index.css';
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(logger, superstitiousMode)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

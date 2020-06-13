import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import './index.css';
import { watchFetchDog } from './redux/actions/actionCreators';
import { reducer } from './redux/reducer/reducer';
import * as serviceWorker from './serviceWorker';

// Store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchFetchDog);

const ConnectedApp = connect(state => {
  console.log(state);
  return state;
})(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

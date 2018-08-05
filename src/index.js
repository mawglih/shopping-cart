import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware, connectRouter, ConnectedRouter } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import combineReducers from 'reducers';
import Routes from 'routes';

import registerServiceWorker from './registerServiceWorker';
import './index.css';


const history = createHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(combineReducers),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
    ),
  ),
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();

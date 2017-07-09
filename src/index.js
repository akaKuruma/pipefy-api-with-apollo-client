import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Main/App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloProvider } from 'react-apollo';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import appReducers from './Redux/reducer'
import pipefyApolloClient from './Apollo/client'

let store = createStore(
  combineReducers({
    appState: appReducers,
    apollo: pipefyApolloClient.reducer(),
  }),
  {}, // initial state
  compose(
    applyMiddleware(pipefyApolloClient.middleware()),
    (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);

ReactDOM.render(
  <ApolloProvider store={store} client={pipefyApolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();

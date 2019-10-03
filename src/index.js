import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import store from './redux';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const router = require('connected-react-router/immutable');

const initialState = {};
const history = createBrowserHistory();
const providerStore = store(initialState, history);

ReactDOM.render(
  <Provider store={providerStore}>
    <router.ConnectedRouter history={history}>
      <App />
    </router.ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

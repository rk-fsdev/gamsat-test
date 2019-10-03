import { applyMiddleware, compose, createStore } from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import SagaManager from './sagas';

const router = require('connected-react-router/immutable');

const store = (initialState = {}, history) => {
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          shouldHotReload: false
        })
      : compose;

  const sagaMiddleware = createSagaMiddleware();

  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware, router.routerMiddleware(history)));

  const result = createStore(rootReducer(history), fromJS(initialState), enhancer);

  SagaManager.startSagas(sagaMiddleware);

  return result;
};

export default store;

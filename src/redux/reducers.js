import { combineReducers } from 'redux-immutable';

import chatWidget from '../containers/ChatWidget/reducers';
import { connectRouter } from 'connected-react-router';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    chatWidget
  });

export default rootReducer;

import { fromJS } from 'immutable';
import { UPDATE_CURRENT_MESSAGE, ADD_MESSAGE } from './actions';

const initialState = fromJS({
  messages: [],
  currentMessageText: ''
});

export default function chatWidgetReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CURRENT_MESSAGE:
      return state.set('currentMessageText', action.messageText);

    case ADD_MESSAGE:
      return state.set('messages', state.get('messages').push(action.message));

    default:
      return state;
  }
}

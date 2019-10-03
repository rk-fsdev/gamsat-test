export const UPDATE_CURRENT_MESSAGE = 'UPDATE_CURRENT_MESSAGE';
export const updateCurrentMessage = messageText => ({
  type: UPDATE_CURRENT_MESSAGE,
  messageText
});

export const RESPONSE_REQUESTED = 'RESPONSE_REQUESTED';
export const responseRequested = () => ({
  type: RESPONSE_REQUESTED
});

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const addMessage = (type, text) => ({
  type: ADD_MESSAGE,
  message: { type, text }
});

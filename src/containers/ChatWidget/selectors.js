import { createSelector } from 'reselect';

import { chatWidgetSelector } from '../../redux/selectors';

export const getCurrentMessageText = () =>
  createSelector(
    chatWidgetSelector,
    chatWidgetState => chatWidgetState.get('currentMessageText')
  );

export const getMessages = () =>
  createSelector(
    chatWidgetSelector,
    chatWidgetState => chatWidgetState.get('messages').toJS()
  );

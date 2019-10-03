import { all, takeLatest, fork, put } from 'redux-saga/effects';
import randomSentence from 'random-sentence';

import { addMessage, RESPONSE_REQUESTED } from './actions';
import { IN_MESSAGE } from './constants';

function* addMessageRequested() {
  yield put(addMessage(IN_MESSAGE, randomSentence({ min: 3, max: 10 })));
}

function* addMessageRequestedListener() {
  yield takeLatest(RESPONSE_REQUESTED, addMessageRequested);
}

export default function* root() {
  yield all([fork(addMessageRequestedListener)]);
}

import { all, takeLatest, fork, put, delay } from 'redux-saga/effects';
import randomSentence from 'random-sentence';

import { addMessage, RESPONSE_REQUESTED } from './actions';
import { IN_MESSAGE } from './constants';

function* addMessageRequested() {
  yield delay(800);
  yield put(addMessage(IN_MESSAGE, randomSentence({ min: 14, max: 20 })));
}

function* addMessageRequestedListener() {
  yield takeLatest(RESPONSE_REQUESTED, addMessageRequested);
}

export default function* root() {
  yield all([fork(addMessageRequestedListener)]);
}

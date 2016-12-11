import { takeEvery, delay} from 'redux-saga'
import { put } from 'redux-saga/effects'

import { INCREMENT_ASYNC } from '../actions/types'

import { increaseCount } from '../actions'

export function* incrementAsyncSaga() {
  yield delay(1000)
  yield put(increaseCount())
}

export function* watchIncrementAsync() {
  yield* takeEvery(INCREMENT_ASYNC, incrementAsyncSaga)
}

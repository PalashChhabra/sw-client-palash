import rootsSaga from './roots.saga';
import { all, fork } from 'redux-saga/effects';

export function *sagas() {
	yield all([fork(rootsSaga)]);
}

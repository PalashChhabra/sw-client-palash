import resourceDetailSaga from './resource-detail.saga';
import resourceSaga from './resource.saga';
import rootsSaga from './roots.saga';
import { all, fork } from 'redux-saga/effects';

export function *sagas() {
	yield all([fork(rootsSaga), fork(resourceSaga), fork(resourceDetailSaga)]);
}

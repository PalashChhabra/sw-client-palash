import { FETCH_ROOTS } from '../constants';
import { getRoots } from '../api';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchRootsFailure, fetchRootsSuccess } from '../actions';

function *fetchRootsSaga() {
	try {
		const response = yield call(getRoots);

		yield put(
			fetchRootsSuccess(response.data),
		);
	} catch (e) {
		yield put(
			fetchRootsFailure(new Error('Error fetching Roots')),
		);
	}
}

function *rootsSaga() {
	yield all([takeLatest(FETCH_ROOTS, fetchRootsSaga)]);
}

export default rootsSaga;

import { FETCH_ROOTS } from '../constants';
import { Root } from '../models';
import { getRoots } from '../api';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchRootsFailure, fetchRootsSuccess } from '../actions';

function *fetchRootsSaga() {
	try {
		const response = yield call(getRoots);
		const responseData: Root = response.data;

		yield put(
			fetchRootsSuccess(responseData),
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

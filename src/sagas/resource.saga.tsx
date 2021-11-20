import { FETCH_RESOURCE } from '../constants';
import { getResource } from '../api';
import { FetchResourceRequest, Resource } from '../models';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchResourceFailure, fetchResourceSuccess } from '../actions';

function *fetchResourceSaga(action : FetchResourceRequest) {
	try {
		const response = yield call(getResource, action.rootType);
		const responseData: Resource = response.data;

		yield put(
			fetchResourceSuccess(responseData.results),
		);
	} catch (e) {
		yield put(
			fetchResourceFailure(new Error('Error fetching Resources')),
		);
	}
}

function *resourceSaga() {
	yield all([takeLatest(FETCH_RESOURCE, fetchResourceSaga)]);
}

export default resourceSaga;

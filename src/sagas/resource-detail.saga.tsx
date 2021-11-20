import { FETCH_RESOURCE_DETAIL } from '../constants';
import { getResourceDetail } from '../api';
import { FetchResourceDetailRequest, ResourceResult } from '../models';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchResourceDetailFailure, fetchResourceDetailSuccess } from '../actions';

function *fetchResourceDetailSaga(action : FetchResourceDetailRequest) {
	try {
		const response = yield call(getResourceDetail, action.apiURL);
		const responseData: ResourceResult = response.data;

		yield put(
			fetchResourceDetailSuccess(responseData),
		);
	} catch (e) {
		yield put(
			fetchResourceDetailFailure(new Error('Error fetching Resources')),
		);
	}
}

function *resourceDetailSaga() {
	yield all([takeLatest(FETCH_RESOURCE_DETAIL, fetchResourceDetailSaga)]);
}

export default resourceDetailSaga;

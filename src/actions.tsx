import { Dispatch } from 'redux';
import { FETCH_RESOURCE,
	FETCH_RESOURCE_DETAIL,
	FETCH_RESOURCE_DETAIL_FAILURE,
	FETCH_RESOURCE_DETAIL_SUCCESS,
	FETCH_RESOURCE_FAILURE,
	FETCH_RESOURCE_SUCCESS,
	FETCH_ROOTS,
	FETCH_ROOTS_FAILURE,
	FETCH_ROOTS_SUCCESS } from './constants';
import { getResource, getResourceDetail, getRoots } from './api';

// To fetch Roots
export const fetchRoots = () => async (dispatch: Dispatch) => {
	dispatch({ type: FETCH_ROOTS });
	try {
		const root = await getRoots();

		return dispatch({ type: FETCH_ROOTS_SUCCESS, payload: root });
	} catch (error) {
		return dispatch({ type: FETCH_ROOTS_FAILURE, payload: error });
	}
};

// To fetch Resources inside a Root
export const fetchResource = (rootType: string) => async (dispatch: Dispatch) => {
	dispatch({ type: FETCH_RESOURCE });

	try {
		const resources = await getResource(rootType);

		return dispatch({ type: FETCH_RESOURCE_SUCCESS, payload: resources });
	} catch (error) {
		return dispatch({ type: FETCH_RESOURCE_FAILURE, payload: error });
	}
};

// To fetch Other Info inside a Resource
export const fetchResourceDetail = (apiURL: string) => async (dispatch: Dispatch) => {
	dispatch({ type: FETCH_RESOURCE_DETAIL });

	try {
		const resourceDetail = await getResourceDetail(apiURL);

		return dispatch({ type: FETCH_RESOURCE_DETAIL_SUCCESS, payload: resourceDetail });
	} catch (error) {
		return dispatch({ type: FETCH_RESOURCE_DETAIL_FAILURE, payload: error });
	}
};

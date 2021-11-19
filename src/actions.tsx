import { Dispatch } from 'redux';
import { FETCH_RESOURCE,
	FETCH_RESOURCE_FAILURE,
	FETCH_RESOURCE_SUCCESS,
	FETCH_ROOTS,
	FETCH_ROOTS_FAILURE,
	FETCH_ROOTS_SUCCESS } from './constants';
import { getResource, getRoots } from './api';

export const fetchRoots = () => async (dispatch: Dispatch) => {
	dispatch({ type: FETCH_ROOTS });
	try {
		const root = await getRoots();

		return dispatch({ type: FETCH_ROOTS_SUCCESS, payload: root });
	} catch (error) {
		return dispatch({ type: FETCH_ROOTS_FAILURE, payload: error });
	}
};

export const fetchResource = (rootType: string) => async (dispatch: Dispatch) => {
	dispatch({ type: FETCH_RESOURCE });

	try {
		const resources = await getResource(rootType);

		return dispatch({ type: FETCH_RESOURCE_SUCCESS, payload: resources });
	} catch (error) {
		return dispatch({ type: FETCH_RESOURCE_FAILURE, payload: error });
	}
};

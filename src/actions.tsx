import { Dispatch } from 'redux';
import { getRoots } from './api';
import { FETCH_ROOTS, FETCH_ROOTS_FAILURE, FETCH_ROOTS_SUCCESS } from './constants';

export const fetchRoots = () => async (dispatch: Dispatch) => {
	dispatch({ type: FETCH_ROOTS });
	try {
		const root = await getRoots();

		return dispatch({ type: FETCH_ROOTS_SUCCESS, payload: root });
	} catch (error) {
		return dispatch({ type: FETCH_ROOTS_FAILURE, payload: error });
	}
};

import initialState from './initial-state';
import { Action, IReducer } from '../models';
import {
	FETCH_ROOTS,
	FETCH_ROOTS_FAILURE,
	FETCH_ROOTS_SUCCESS,
} from '../constants';

export const rootsReducer = (
	state: IReducer = initialState.roots,
	action: Action,
): IReducer => {
	switch (action.type) {
		case FETCH_ROOTS:
			return { isLoading: true };

		case FETCH_ROOTS_FAILURE:
			return {
				isLoading: false,
				error: action.payload,
			};

		case FETCH_ROOTS_SUCCESS:
			return {
				isLoading: false,
				payload: action.payload,
			};
		default:
			return state;
	}
};

export default rootsReducer;

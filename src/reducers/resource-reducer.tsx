import initialState from './initial-state';
import { Action, IReducer } from '../models';
import {
	FETCH_RESOURCE,
	FETCH_RESOURCE_FAILURE,
	FETCH_RESOURCE_SUCCESS,
} from '../constants';

export const resourceReducer = (
	state: IReducer = initialState.resource,
	action: Action,
): IReducer => {
	switch (action.type) {
		case FETCH_RESOURCE:
			return { isLoading: true };

		case FETCH_RESOURCE_FAILURE:
			return {
				isLoading: false,
				error: action.payload,
			};

		case FETCH_RESOURCE_SUCCESS:

			return {
				isLoading: false,
				payload: action.payload,
			};
		default:
			return state;
	}
};

export default resourceReducer;

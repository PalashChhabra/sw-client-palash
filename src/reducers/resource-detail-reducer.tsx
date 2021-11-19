import initialState from './initial-state';
import { Action, IReducer } from '../models';
import {
	FETCH_RESOURCE_DETAIL,
	FETCH_RESOURCE_DETAIL_FAILURE,
	FETCH_RESOURCE_DETAIL_SUCCESS,
} from '../constants';

export const resourceDetailReducer = (
	state: IReducer = initialState.resourceDetail,
	action: Action,
): IReducer => {
	switch (action.type) {
		case FETCH_RESOURCE_DETAIL:
			return { isLoading: true };

		case FETCH_RESOURCE_DETAIL_FAILURE:
			return {
				isLoading: false,
				error: action.payload,
			};

		case FETCH_RESOURCE_DETAIL_SUCCESS:

			return {
				isLoading: false,
				payload: action.payload,
			};
		default:
			return state;
	}
};

export default resourceDetailReducer;

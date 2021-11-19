import { combineReducers } from 'redux';
import resourceDetailReducer from './resource-detail-reducer';
import resourceReducer from './resource-reducer';
import rootsReducer from './roots-reducer';

const reducers = combineReducers({
	roots: rootsReducer,
	resource: resourceReducer,
	resourceDetail: resourceDetailReducer,
});

export default reducers;

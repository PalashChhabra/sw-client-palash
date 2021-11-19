import { combineReducers } from 'redux';
import resourceReducer from './resource-reducer';
import rootsReducer from './roots-reducer';

const reducers = combineReducers({
	roots: rootsReducer,
	resource: resourceReducer,
});

export default reducers;

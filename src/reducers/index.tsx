import { combineReducers } from 'redux';
import rootsReducer from './roots-reducer';

const reducers = combineReducers({
	roots: rootsReducer,
});

export default reducers;

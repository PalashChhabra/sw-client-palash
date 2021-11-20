import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import { sagas } from './sagas/index';
import { applyMiddleware, createStore } from 'redux';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;

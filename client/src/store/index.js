import {createStore, applyMiddleware} from 'redux';


//SAGAS 
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';


//REDUCER
import rootReducer from '../reducer';


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
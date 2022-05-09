import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';


//ADD USER

function sagaApiAddUser (payload) {
    return axios.post('http://localhost:3001/user/createUser', payload)
}


function* sagaAddUser ({payload}) {
    const response = yield call(sagaApiAddUser, payload);
    console.log('SOY RESPONSE ADD USER', response);
    if (response.status === 200) {
        yield put({type: 'ADD_USER_SUCCESS', payload: response.data});
    } else {
        yield put({type: 'ADD_USER_ERROR', payload: response});
    }
}


//GET USERS

function sagaApiGetUsers () {
    return axios.get('http://localhost:3001/user/allUser')
}

function* sagaGetUsers () {
    const response = yield call(sagaApiGetUsers);
    if  (response.status === 200) {
        yield put({type: 'GET_ALL_USER_SUCCESS', payload: response.data});
    } else {
        yield put({type: 'GET_ALL_USER_ERROR', payload: response});
    }
}


//ADD GAME

function sagaApiAddGames (payload) {
    return axios.post('http://localhost:3001/game/createGame', payload)
}

function* sagaAddGame({payload}){
    const response = yield call(sagaApiAddGames, payload);
    if (response.status === 200) {
        yield put({type: 'ADD_GAME_SUCCESS', payload: response.data});
    } else {
        yield put({type: 'ADD_GAME_ERROR', payload: response});
    }
}


//ALL GAMES

function sagaApiAllGames () {
    return axios.get('http://localhost:3001/game/allgame')
}


function* sagaGetAllGames () {
    const response = yield call(sagaApiAllGames);
    if (response.status === 200) {
        yield put ({type: 'ALL_GAMES_SUCCESS', payload: response.data});
    } else {
        yield put ({type: 'ALL_GAMES_ERROR', payload: response});
    }
}


//FILTER

function* sagaFilterByUser (payload) {
    //console.log('SAGA FILTER', payload);
    try {
        //console.log('SAGA FILTER SUCCESS')
        yield put ({type: 'FILTER_BY_USER_SUCCESS', payload: payload});
    } catch {
        yield put ({type: 'FILTER_BY_USER_ERROR', payload});
    }

}


export default function* rootSaga() {
    yield takeEvery ('ADD_USER', sagaAddUser);
    yield takeEvery ('GET_ALL_USER', sagaGetUsers);
    yield takeEvery ('ADD_GAME', sagaAddGame);
    yield takeEvery ('ALL_GAMES', sagaGetAllGames);
    yield takeEvery ('FILTER_BY_USER', sagaFilterByUser);
}
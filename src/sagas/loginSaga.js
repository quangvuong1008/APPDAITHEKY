import { put, takeEvery } from 'redux-saga/effects'
function* loginSagaFunction(action) {
    try {
      
        let rentData = yield 
        yield put({
            type: 'GET_RENTDATA_SUCCESS',
            payload: { rentData }
        })
    } catch{
        yield put({
            type: 'GET_RENTDATA_FAIL',
            payload: { }
        })
    }
}


export const rentSaga = [
    takeEvery('GET_RENTDATA_REQUEST', loginSagaFunction)
];


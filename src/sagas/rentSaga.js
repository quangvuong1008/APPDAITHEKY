import { put, takeEvery } from 'redux-saga/effects'
import getRentData from '../fetchAPIs/getRentDataAPI'
function* rentSagaFunction(action) {
    try {
      
        let rentDataOrigin = yield getRentData(action.payload);
        let rentData = rentDataOrigin.dulieu
        let countSellData = rentDataOrigin.sotin
        yield put({
            type: 'GET_RENTDATA_SUCCESS',
            payload: { rentData, countSellData }
        })
    } catch{
        yield put({
            type: 'GET_RENTDATA_FAIL',
            payload: { }
        })
    }
}
    


export const rentSaga = [
    takeEvery('GET_RENTDATA_REQUEST', rentSagaFunction)
];


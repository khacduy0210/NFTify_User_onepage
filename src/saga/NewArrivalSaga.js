import { put, takeLatest } from "@redux-saga/core/effects";
import { recieveNewArrivalApiData, REQUEST_NEW_ARRIVAL_API_DATA } from "../actions/NewArrivalAction";
import { api } from "../service/api";

// const params = {
//     status:1
// }
function* getNewArrivalData(action) {
    console.log(action);
    try {
        const data = yield api.get("/user-nftify");
        console.log(data, "New Arrival");
        yield put(recieveNewArrivalApiData(data));
    }catch(e){
        console.log(e);
    }
}

export default function* NewArrivalSaga() {
    yield takeLatest(REQUEST_NEW_ARRIVAL_API_DATA, getNewArrivalData);
}
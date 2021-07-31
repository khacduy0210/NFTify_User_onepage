import { put, takeLatest } from "@redux-saga/core/effects";
import {
    recieveComingSoonApiData,
    REQUEST_COMING_SOON_API_DATA,
} from "../actions/ComingSoonAction";
import { api } from "../service/api";
const params = {
    status: 2,
};
function* getComingSoonData(action) {
    console.log(action);
    try {
        const data = yield api.get("/user-nftify");
        console.log(data, "Coming Soon");
        yield put(recieveComingSoonApiData(data));
    } catch (e) {
        console.log(e);
    }
}

export default function* ComingSoonSaga() {
    yield takeLatest(REQUEST_COMING_SOON_API_DATA, getComingSoonData);
}

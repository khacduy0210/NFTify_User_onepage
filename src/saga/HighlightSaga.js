import { put, takeLatest } from "@redux-saga/core/effects";
import { recieveHighlightApiData, REQUEST_HIGHLIGHT_API_DATA } from "../actions/HighlightAction";
import { api } from "../service/api";

const params = {
    objectIds : "60da99f200b1370fbe8e97fb,60e7fc7893f44b49cb71a95e,60da8b2a00b1370fbe8e97bc"
    
}
function* getHighlightData(action) {
    console.log(action);
    try {
        const data = yield api.get("user-nftify/highlight/list",params);
        console.log(data, "Highlight");
        yield put(recieveHighlightApiData(data));
    }catch(e){
        console.log(e);
    }
}

export default function* HighlightSaga() {
    yield takeLatest(REQUEST_HIGHLIGHT_API_DATA, getHighlightData);
}
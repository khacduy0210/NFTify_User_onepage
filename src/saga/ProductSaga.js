import { put, takeLatest } from "@redux-saga/core/effects";


import { REQUEST_PRODUCT_API_DATA, recieveProductApiData } from '../actions/ProductAction';
import {  getApi } from "../service/api";
const PRODUCT_API = "/user-nftify";

function* getProductData(action) {
    console.log(action);
    try{
        
            const data = yield getApi(PRODUCT_API);
            console.log(data,"products")
            yield put(recieveProductApiData(data));
            // console.log(data);
        
    } catch(e) {
        console.log(e);
    }
}


export default function* ProductSaga() {
    yield takeLatest(REQUEST_PRODUCT_API_DATA, getProductData);
}
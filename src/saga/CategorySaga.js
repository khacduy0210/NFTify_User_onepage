import {  put, takeLatest } from "@redux-saga/core/effects";


import { REQUEST_CATEGORY_API_DATA, recieveCategoryApiData } from '../actions/CategoryAction';
import { fetchCategoryApi, getApi } from "../service/api";
const CATEGORY_API_URL = "user-nftify/category/list";
function* getCategoryData(action) {
    console.log(action);
    try{
        
            const data = yield getApi(CATEGORY_API_URL);
            console.log(data,"category")
            yield put(recieveCategoryApiData(data));
            // console.log(data);
        
    } catch(e) {
        console.log(e);
    }
}


export default function* CategorySaga() {
    yield takeLatest(REQUEST_CATEGORY_API_DATA, getCategoryData);
}
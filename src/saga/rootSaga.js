import CategorySaga from "./CategorySaga";
import HighlightSaga from "./HighlightSaga";
import ProductSaga from "./ProductSaga";
import { fork,all } from "@redux-saga/core/effects";

export default function* rootSaga() {
    yield all([
        fork(CategorySaga),
        fork(HighlightSaga),
        fork(ProductSaga)
    ])
}
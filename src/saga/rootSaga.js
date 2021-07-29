import CategorySaga from "./CategorySaga";
import HighlightSaga from "./HighlightSaga";
import { fork,all } from "@redux-saga/core/effects";
import NewArrivalSaga from "./NewArrivalSaga";
import ComingSoonSaga from "./ComingSoonSaga";

export default function* rootSaga() {
    yield all([
        fork(CategorySaga),
        fork(HighlightSaga),
        fork(NewArrivalSaga),
        fork(ComingSoonSaga)
    ])
}
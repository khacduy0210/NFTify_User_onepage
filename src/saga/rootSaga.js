import CategorySaga from "./CategorySaga";
import HighlightSaga from "./HighlightSaga";
import { fork, all, call } from "@redux-saga/core/effects";
import NewArrivalSaga from "./NewArrivalSaga";
import ComingSoonSaga from "./ComingSoonSaga";

export default function* rootSaga() {
    yield all(
        [CategorySaga, HighlightSaga, NewArrivalSaga, ComingSoonSaga].map(fork),
    );
}

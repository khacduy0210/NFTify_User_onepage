import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import CategorySaga from "./saga/CategorySaga";
import CategoryReducer from "./reducers/CategoryReducer";
import ProductSaga from "./saga/ProductSaga";
import ProductReducer from "./reducers/ProductReducer";
import { HighlightReducer } from "./reducers/HighlightReducer";
import HighlightSaga from "./saga/HighlightSaga";


const sagaMiddleware = createSagaMiddleware()

const store = createStore(combineReducers({
    category : CategoryReducer,
    product : ProductReducer,
    highlight : HighlightReducer


}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(CategorySaga);
sagaMiddleware.run(ProductSaga);
sagaMiddleware.run(HighlightSaga)
export default store;
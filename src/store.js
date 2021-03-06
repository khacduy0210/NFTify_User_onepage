import { applyMiddleware } from "redux";
import { createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

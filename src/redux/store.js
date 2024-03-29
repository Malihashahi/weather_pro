import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import weatherReducer from "./weather/weatherReducer";
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware =createSagaMiddleware()



const store = createStore(weatherReducer , composeWithDevTools(applyMiddleware(sagaMiddleware)))

export default store;
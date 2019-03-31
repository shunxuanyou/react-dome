import { createStore, applyMiddleware, compose } from 'redux'
// 中间件
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer)
sagaMiddleware.run(sagas)
export default store

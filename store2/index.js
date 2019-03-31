// npm install redux --save
import {createStore,applyMiddleware,compose} from 'redux'
// 导入reducer
import reducer from './reducer'
// 中间件
import thunk from 'redux-thunk'
// 将reducer传入store中
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);
const store=createStore(reducer,enhancer);
export default store
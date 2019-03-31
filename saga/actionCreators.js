import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION,GET_INIT_LIST} from './action-types'

export const getInputChangeAction=(value)=>({
    type:CHANGE_INPUT_VALUE,
    value
});
export const getAddItemAction=()=>({
    type:ADD_TODO_ITEM
});
export const getDeleteItemAction=(index)=>({
    type:DELETE_TODO_ITEM,
    index
});

//获取请求数据的同步action 返回一个对象
export const initListAction=(data)=>({
    type:INIT_LIST_ACTION,
    data
})
//获取请求数据的同步action 返回一个对象 redux-saga 中间件
//视图通过dispatch触发action，redux-saga通过takeEvery方法捕获type，执行自定义的函数，调用同步action initListAction
export const getInitList=()=>({
  type:GET_INIT_LIST
})
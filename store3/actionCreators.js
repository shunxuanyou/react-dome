import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION} from './action-types'
import axios from 'axios'
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
//获取请求数据的异步action 返回一个函数 redux-thunk中间件
export const getTodoList=()=>{
    return (dispatch)=>{
        axios.get('https://api.apiopen.top/getSongPoetry?page=3&count=20').then(res=>{
            console.log(res.data.result);
            const action=initListAction(res.data.result);
            dispatch(action);
            console.log(action);
        })
    }
}
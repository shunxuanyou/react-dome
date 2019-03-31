import {takeEvery,put} from 'redux-saga/effects'
import {GET_INIT_LIST} from './action-types'
import axios from 'axios'
import {initListAction} from './actionCreators'
// generator函数
function* MySaga() {
    // 捕获每次派发的action，触发自定义的方法
    yield takeEvery(GET_INIT_LIST,getInitList)
}
function* getInitList() {
    // axios.get('https://api.apiopen.top/getSongPoetry?page=3&count=20').then(res=>{
    //     const action=initListAction(res.data.result);
    //     console.log(action);
    //     // 修改store的数据
    //     put(action)
    // })
    try {
        const res=yield axios.get('https://api.apiopen.top/getSongPoetry?page=3&count=20');
        const action=initListAction(res.data.result);
        // 通过put触发action
        yield put(action);
        console.log(action);//type: "init_list_action", data: (20) […],
    }catch(err){
        console.log(err);
    }

}
export default MySaga
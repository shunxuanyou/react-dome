import React,{Component,Fragment} from 'react'
import AntdUi from './AntdUi'
import Func from './Func'
// 1.1导入store
import store from '../../store'

import {getInputChangeAction,getAddItemAction,getDeleteItemAction,getTodoList} from '../../store/actionCreators'
// Antd 容器组件
class Antd extends Component{
    constructor(props){
        super(props);
        // 1.2获取store的数据
        this.state=store.getState();
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);
        // 1.4监听store的改变
        store.subscribe(this.handleStoreChange)
    }
    handleInputChange(e){
        const action=getInputChangeAction(e.target.value)
        // 1.3通过dispatch改变store的数据
        store.dispatch(action);
    }
    handleStoreChange(){
        // 1.5store的发生改变的时候，重新获取store中的数据
        this.setState(store.getState())
    }
    handleBtnClick(){
        const action=getAddItemAction();
        store.dispatch(action);
    }
    handleItemDelete(index){
        const action=getDeleteItemAction(index);
        store.dispatch(action)
    }
    render() {
        return <Fragment>
            <AntdUi
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                list={this.state.list}
                handleItemDelete={this.handleItemDelete}
            />
        </Fragment>
    }
    //获取请求的数据
    componentDidMount() {
        const action=getTodoList();
        store.dispatch(action);
    }

}
export default Antd
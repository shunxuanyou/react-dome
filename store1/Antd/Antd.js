import React,{Component} from 'react'
// npm install antd --save
import {Input,Button,List} from 'Antd';
import 'antd/dist/antd.css';
// 1.1导入store
import store from '../../store'

class Antd extends Component{
    constructor(props){
        super(props);
        // 1.2获取store的数据
        this.state=store.getState();
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        // 1.4监听store的改变
        store.subscribe(this.handleStoreChange)
    }
    handleInputChange(e){
        console.log(e.target.value);
        const action={
            type:'change_input_value',
            value:e.target.value
        };
        // 1.3通过dispatch改变store的数据
        store.dispatch(action);
    }
    handleStoreChange(){
        // 1.5store的发生改变的时候，重新获取store中的数据
        this.setState(store.getState())
    }
    handleBtnClick(){
        const action={
            type:'add_todo_item'
        };
        store.dispatch(action);
    }
    handleItemClick(index){
        console.log(index);
        const action={
            type:'delete_todo_item',
            index
        };
        store.dispatch(action)
    }
    render() {
        return (
            <div style={{margin:'10px'}}>
                <Input placeholder='请输入文本' style={{width:'300px',marginRight:'10px'}}
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />
                <Button type='primary' onClick={this.handleBtnClick}>提交</Button>
                <List
                    style={{width:'300px'}}
                    dataSource={this.state.list}
                    renderItem={(item,index)=>(<List.Item onClick={this.handleItemClick.bind(this,index)}>{item}</List.Item>)}
                />


            </div>
        )
    }

}
export default Antd
import React from 'react'
// npm install antd --save
import {Input,Button,List} from 'antd';
import 'antd/dist/antd.css';
// Func 无状态组件，性能更好
function Func(props) {
    return  <div style={{margin:'10px'}}>
        <Input placeholder='请输入文本' style={{width:'300px',marginRight:'10px'}}
               value={props.inputValue}
               onChange={props.handleInputChange}
               onKeyPress={props.handleBtnClick}
        />
        <Button type='primary' onClick={props.handleBtnClick}>提交</Button>
        <List
            style={{width:'300px'}}
            dataSource={props.list}
            renderItem={(item,index)=>(<List.Item onClick={()=>{props.handleItemDelete(index)}}>{item}</List.Item>)}
        />
    </div>
}
export default Func
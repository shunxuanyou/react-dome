import React,{Component} from 'react'
// npm install antd --save
import {Input,Button,List} from 'antd';
import 'antd/dist/antd.css';
// AntdUi UI组件
class AntdUi extends Component{
    render() {
        return (
            <div style={{margin:'10px'}}>
                <Input placeholder='请输入文本' style={{width:'300px',marginRight:'10px'}}
                       value={this.props.inputValue}
                       onChange={this.props.handleInputChange}
                />
                <Button type='primary' onClick={this.props.handleBtnClick}>提交</Button>
                <List
                    style={{width:'300px'}}
                    dataSource={this.props.list}
                    renderItem={(item,index)=>(<List.Item onClick={()=>{this.props.handleItemDelete(index)}}>{item}</List.Item>)}
                />
            </div>
        )
    }
}
export default AntdUi
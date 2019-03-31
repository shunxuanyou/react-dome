import React,{Component,Fragment} from 'react'
class TodoList extends Component {
    constructor(props){
        super(props);
        // 初始化状态
        this.state={
            inputValue:'',
            list:['独孤求败','睡不好觉','殇不患']
        }
    }
    handleInputChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    handleBtnClick(){
        if(this.state.inputValue===''){return false}
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
    handleItemDelete(index){
        const list=[...this.state.list];
        list.splice(index,1);
        this.setState({
            list
        })
    }
    render() {
        return (
            <Fragment>
                <input type="text" placeholder='请输入文本' value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
                <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <li key={index} onClick={this.handleItemDelete.bind(this,index)}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }

}
export default TodoList

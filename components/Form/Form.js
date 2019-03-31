import React,{Component} from 'react'
class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            pwd:''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this)
    }
    handleSubmit(e){
        const name=this.nameInput.value;
        console.log(name,this.state.pwd);
        // 阻止事件的默认行为
        e.preventDefault()
    }
    handleChange(e){
        // 读取输入框的值
        const pwd=e.target.value;
        // 更新状态
        this.setState({
            pwd
        })
        console.log(pwd);
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    {/*非受控组件：需要时才手动读取表单输入框中的数据*/}
                    用户名：<input type="text" ref={input=>this.nameInput=input}/>
                    {/*受控组件：表单项输入数据能自动收集成状态*/}
                    密码：<input type="password" value={this.state.pwd} onChange={this.handleChange}/>
                    <input type="submit" value='登录'/>
                </form>
            </div>
        )
    }
}
export default Form
import React, {Component, Fragment} from 'react'
class Refs extends Component{
    constructor(props){
        super(props);
        this.state={
            isLinkMe:false
        }
        this.handleToggle=this.handleToggle.bind(this);
        this.handleInput=this.handleInput.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
    }
    // 新添加的方法：内部的this默认不是组件对象，而是undefined
    handleToggle(){
        // 得到状态并取反
        const isLinkMe=!this.state.isLinkMe;
        // 更新状态
        this.setState({
            isLinkMe
        })
    }
    render() {
        return (
            <Fragment>
                <h2 onClick={this.handleToggle}>{this.state.isLinkMe?'独孤求败':"殇不患"}</h2>

                <input type="text" ref='content'/><br/>
                <input type="text" ref={input=>this.input=input}/>
                <button onClick={this.handleInput}>提示输入</button>
                <input type="text" placeholder='失去焦点提示内容' onBlur={this.handleBlur}/>
            </Fragment>
        )
    }
    handleInput(){
      const input=this.refs.content;
      console.log(input.value);//ref
      console.log(this.input.value);//this.input
    }
    handleBlur(event){
      console.log(event.target.value);
    }
}
export default Refs
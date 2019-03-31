import React,{Component} from 'react'
import Children from './children'
class parent extends Component{
    constructor(props){
        super(props);
        // 当组件的state或者props发生改变的时候，render函数就会重新执行
        this.state={
            inputValue:'',
            list:['独孤求败','睡不好觉','殇不患']
        };
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this)
    }
    handleInputChange(e){
        // this.setState({
        //     inputValue:e.target.value
        // })
        // 异步的setState
        const value=e.target.value
        this.setState(()=>({
            inputValue:value
        }))
    }
    handleBtnClick(){
        if(this.state.inputValue===''){return false}
        // this.setState({
        //     list:[...this.state.list,this.state.inputValue],
        //     inputValue:''
        // })
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }))
    }
    handleItemDelete(index){
        // const list=[...this.state.list];
        // list.splice(index,1);
        // this.setState({
        //     list
        // })
        this.setState((prevState)=>{
            const list=[...prevState.list];
            list.splice(index,1);
            return {list}
        })
    }
    // immutable
    // React 中采用单项数据流
    // 数据流动方向：自上而下，也就是只能由父组件传递到子组件
    // 数据都是由父组件提供的，子组件想要使用数据，都是从父组件中获取的
    // 如果多个组件都要使用某个数据，最好将这部分共享的状态提升至他们最近的父组件当中进行管理
    // 函数代码拆分，易于测试
    getTodoItem(){
        return this.state.list.map((item,index)=>{
            return (
                <div key={index}>
                    {/*1.1父组件向子组件传递数据和回调函数*/}
                    <Children item={item} index={index} handleItemDelete={this.handleItemDelete}/>
                </div>
            )
        })
    }
    render() {
        return (
            <header>
                <input type="text" placeholder='请输入文本' value={this.state.inputValue} onChange={this.handleInputChange}/>
                <button onClick={this.handleBtnClick}>提交</button>
                <ul>
                    {
                        // this.state.list.map((item,index)=>{
                        //     return (
                        //         <div key={index}>
                        //             {/*1.1父组件向子组件传递数据和回调函数*/}
                        //             <Children item={item} index={index} handleItemDelete={this.handleItemDelete}/>
                        //         </div>
                        //     )
                        // })
                        this.getTodoItem()
                    }
                </ul>
            </header>
        )
    }
}
export default parent
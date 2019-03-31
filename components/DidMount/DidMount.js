import React,{Component} from 'react'
import Children from '../parent/children'
//npm install axios --save
import axios from 'axios'
class DidMount extends Component{
    constructor(props){
        super(props);
        // 当组件的state或者props发生改变的时候，render函数就会重新执行
        this.state={
            inputValue:'',
            list:['独孤求败','睡不好觉','殇不患'],
            news:[]
        };
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this)
    }
    handleInputChange(e){
        // 异步的setState
        const value=e.target.value
        this.setState(()=>({
            inputValue:value
        }))
    }
    handleBtnClick(){
        if(this.state.inputValue===''){return false}
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }))
    }
    handleItemDelete(index){
        this.setState((prevState)=>{
            const list=[...prevState.list];
            list.splice(index,1);
            return {list}
        })
    }
    render() {
        return (
            <header>
                <input type="text" placeholder='请输入文本' value={this.state.inputValue} onChange={this.handleInputChange}/>
                <button onClick={this.handleBtnClick}>提交</button>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <div key={index}>
                                    {/*1.1父组件向子组件传递数据和回调函数*/}
                                    <Children item={item.title} index={index} handleItemDelete={this.handleItemDelete}/>
                                </div>
                            )
                        })
                    }
                </ul>
                {
                    this.state.news.map((item,index)=>{
                        return <div key={index}>
                            <h1>{item.title}</h1>
                            <p>{item.content}</p>
                        </div>
                    })
                }
            </header>
        )
    }
    componentDidMount() {
       axios.get('https://api.apiopen.top/getSongPoetry?page=1&count=20')
           .then(res=>{
               this.setState(()=>({
                   list:res.data.result
               }))
           })
           .catch(err=>{
               console.log(err);
           })
        fetch('https://api.apiopen.top/getSongPoetry?page=1&count=20')
            .then(response=>{
                return response.json();
            })
            .then(res=>{
                this.setState({
                   news: res.result
               })
            })
    }
}
export default DidMount
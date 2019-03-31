import React,{Component,Fragment} from 'react'
// npm install react-transition-group --save
import { CSSTransition } from 'react-transition-group';
import './style.css';
class Animation extends Component{
    constructor(props){
        super(props);
        this.state={
            show:true
        };
        this.handleToggle=this.handleToggle.bind(this);
    }
    render() {
        return (
            <Fragment>
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames='fade'
                    unmountOnExit
                    onEntered={(el)=>{el.style.color='pink'}}
                >
                    <h1>react动画</h1>
                </CSSTransition>
                <button onClick={this.handleToggle}>toggle</button>
            </Fragment>
        )
    }
    handleToggle(){
        this.setState({
            show:this.state.show?false:true
        })
    }
}
export default Animation
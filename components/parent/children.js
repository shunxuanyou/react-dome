import React,{Component} from 'react'
// 引入模块，通过类型检查，提高程序的稳定性
// npm i -S prop-types
import PropTypes from 'prop-types'
class children extends Component{

    // 校验传递过来的数据
    static propTypes={
        item:PropTypes.string,
        index:PropTypes.number,
        handleItemDelete:PropTypes.func.isRequired,
        test:PropTypes.string.isRequired
    };
    static defaultProps={
        test:'默认的数据'
    };

    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this)
    }
    render() {
        //当父组件的render函数被运行时，它的子组件的render都将被重新运行
        return (
            <footer>
                {/*1.2子组件通过this.props进行接收*/}
                <div onClick={this.handleClick}>{this.props.item}-{this.props.test}</div>
            </footer>
        )
    }
    handleClick(){
        this.props.handleItemDelete(this.props.index)
    }
}
export default children
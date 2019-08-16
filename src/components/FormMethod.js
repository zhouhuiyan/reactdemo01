import React, { Component } from 'react'

class FormM extends Component{
    constructor(props){
        super(props);

        this.state = {
            username:''
        }
    }

    inputChange=(e)=>{
        
        // console.log('1111')
        console.log(e.target.value);
        this.setState({
            username:e.target.value
        })
    }
    inputChange1=(e)=>{
        
        // console.log('1111')
        console.log(e.target.value);
        let val = this.refs.username.value
        this.setState({
            username:val
        })
    }

    getInput=()=>{
        alert(this.state.username);
    }
    keyUp=(e)=>{
        console.log(e.keyCode);
        if(e.keyCode === 13){
            alert(e.target.value)
        }
    }

    render(){
        return(
            <div>
                <h2>react表单事件</h2>
                {/* 获取表单的值
                    1.监听表单的改变事件
                    2.在改变事件里获取表单输入的值
                    3.把表单输入的值赋值给username
                    4.点击按钮的时候获取state中的username */}
                <input type="text" onChange={this.inputChange}/>
                <button onClick={this.getInput}>获取input的值</button>
                <br/>
                <br/>
                <br/>
                {/* ref获取节点
                1.给元素定义ref属性
                <input ref="name"/>
                2.通过this.refs.name 获取dom节点 */}
                <h2>ref获取节点</h2>
                <input ref="username" type="text" onChange={this.inputChange1}/>
                <button onClick={this.getInput}>获取input的值</button>
                
                <br/>
                <br/>
                <br/>
                <h2>键盘事件</h2>
                {/* 
                    onKeyUp
                    onKeyDown
                    onKeyPress
                    
                */}
                <input type="text" onKeyUp={this.keyUp}/>











                <br/>
                <br/>
            </div>
        )
    }
}

export default FormM;
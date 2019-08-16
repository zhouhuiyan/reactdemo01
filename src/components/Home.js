
import React,{ Component } from 'react';
import '../assets/css/new.css'

class Home extends Component{
    constructor(props){
        //构造函数
        super(props);
        // 定义数据
        this.state={
            name:'张三',
            title:'this is title',
            color:'red',
            style:{
                color:'red',
                fontSize:'20px'
            }
        }
    }

    render(){
        return (
            <div>
                <div title={this.state.title}>hello world</div>
                <p>my name is {this.state.name}</p>
                <div className='red'>我是红色的</div>
                <div className={this.state.color}>我是红色的</div>

                {/* <label for="name">姓名</label>
                <input type="text" id="name"/> */}

                <label htmlFor="name">姓名</label>
                <input type="text" id="name"/>

                <div style={{color:'red'}}>我是红色的 style</div>

                <div style={this.state.style}>我是红色的 style</div>


            </div>
            
        )
    }
}

export default Home;
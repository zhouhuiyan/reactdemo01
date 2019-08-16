import React, { Component } from 'react'

class Method extends Component{
    constructor(props){
        super(props);

        this.state = {
            msg:'message',
            msg1:'message',
        }
        // 第二种改变方式
        this.getData1 = this.getData.bind(this);  
    }

    run(event){
        alert('run');
        console.log(event);
        // 获取执行事件的dom节点
        alert(event.target);
        event.target.style.background = 'red';
    }

    getData(){
        alert(this.state.msg);
    }

    getData1(){
        alert(this.state.msg);
    }

    getData2=()=>{
        alert(this.state.msg)
    }

    setData=()=>{
        this.setState({
            msg:'12345678'
        });
    }

    setData1=(data)=>{
        this.setState({
            msg: data
        });

    }
    getAidData=(event)=>{
        // 得到自定义属性的值
        alert(event.target.getAttribute('aid'));
    }

    render(){
        return(
            <div>
                <h2>react事件方法</h2>
                {/* <button onClick={this.run()}>执行方法--直接执行</button><br/> */}
                <button onClick={this.run}>执行方法</button><br/>
               
                <button onClick={this.getData.bind(this)}>得到数据- 第一种改变this指向  this.getData.bind(this)</button>
                <br/>
                <button onClick={this.getData1}>得到数据- 第二种改变this指向 再构造函数中改变</button>

                <button onClick={this.getData2}>得到数据- 第三种改变this指向 使用箭头函数创建方法</button>


                <h2>改变state的值</h2>
                {this.state.msg}
                <button onClick={this.setData}>改变值</button>
                <hr/>

                <button onClick={this.setData1.bind(this,'张三','里斯')}>执行方法传值</button>

                <hr/>
                <h2>获取dom节点属性</h2>

                <button aid="1234556789" onClick={this.getAidData}>获取aid的值</button>

            </div>
        )
    }
}

export default Method;
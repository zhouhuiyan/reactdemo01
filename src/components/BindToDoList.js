import React,{Component} from 'react'


class BindToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:'111111111'
          };
    }

    inputChange=(e)=>{
        this.setState({
            msg:e.target.value
        })
    }
    msgChange=()=>{
        this.setState({
            msg:'already change'
        })
    }



    render() {
        return (
            <div>
                <h2>双向数据绑定</h2>
                {/* model改变影响View   View改变反过来影响model */}
                {this.state.msg}
                <input value={this.state.msg}  type="text" onChange={this.inputChange}/>
                <button onClick={this.msgChange}>改变值</button>
            </div>
        );
    }
}

export default BindToDoList;
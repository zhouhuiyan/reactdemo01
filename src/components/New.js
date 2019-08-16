import React from "react"
import '../assets/css/new.css'
import img from '../assets/images/1.jpg'

class New extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            list:[
                '11111',
                '22222',
                '33333'
            ],
            list2:[
                <h2 key='12'>我是一个h2</h2>,
                <h2 key='22'>h22222222222</h2>
            ],
            list3:[
                {title:'news 111111111111'},
                {title:'news 222222222222'},
                {title:'news 3333333333333'}
            ]
        }

    }

    render(){
        var listResult = this.state.list.map(function(value,key){
            return  <li key={key}>{value}</li>
        })
        return(
            <div className="news">
                 aaa
                 {/* 这种方式不可以 */}
                <img src="../assets/images/1.jpg" alt=""/>
                {/* 引入本地图片 */}
                <img src={img} alt="本地图片"/>
                <img src={require('../assets/images/1.jpg')} alt="本地图片"/>

                {/* 引入远程图片 */}
                <img src="https://www.baidu.com/img/bd_logo1.png?where=super" alt="远程图片"/>
                <ul>
                    <li>this is a list</li>
                    <li>this is a list</li>
                    <li>this is a list</li>
                    <li>this is a list</li>
                </ul>
                <hr/>
                <h1>循环数组</h1>
                {this.state.list}
                {this.state.list2}
                <hr/>
                {listResult}
                <hr/>
                {
                    this.state.list3.map((value,key)=>{
                        return <li key={key}>{value.title}</li>
                    })
                }


            </div>
        )
    }

}

export default New;
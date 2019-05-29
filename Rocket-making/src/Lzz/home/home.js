import React,{Component} from 'react';

import "./home.css"

class Home extends Component {
    constructor(){
        super();
        this.state={ 
            date:"Home组件",
            value:"我是属性绑定数据"
        }
    }

    render (){
        return(
            <div>
                <h1>title={this.state.value}>{this.state.date}</h1>
                <h1 classname="mainstyle">绑定样式</h1>
                <h1 style={{color:"blue",frontSize:"20px"}}>行内样式</h1>

                <label htmlFor="test">姓名</label>
                <input id="test"/>

            </div>
        )
    }       
}

export default Home;
import React from 'react'

export default class StateComponent extends React.Component {

  constructor (props) {
    super (props);
    // 定义
    this.state = {
      count: 10
    }
  }
   // 添加
  increment = () => {
    this.setState({
      count: this.state.count +=1
    })
  }

  // 减少
  decrement = () => {
    this.setState({
      count: this.state.count -=1
    })
  }

  about = () => {
    console.log(this)
  }

  render () {
    return (
      <div>
        <h3>组件的state</h3>
        <p>{this.state.count}</p>
        <button onClick={ this.increment}>增加 +</button>
        <button onClick={ this.decrement}>介绍 -</button>

        <button onClick={ this.about}>关于this</button>
      </div>
    )
  }
}
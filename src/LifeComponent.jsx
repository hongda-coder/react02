import React from 'react' 

export default class LifeComponent extends React.Component {
  // componentWillMount: 在组件渲染render之前执行
  // componentDidMount: 在组件渲染render之后执行
  // shouldComponentUpdate: 返回true和false  true代表可以改变  false则不可以改变
  // componentWillUpdate: 数据在改变之前执行(state, props)
  // componentDidUpdate: 数据在改变之后执行(state, props)
  // componentWillReceiveProps: props发生改变执行
  // componentWillUnmount: 组件卸载之前执行

  constructor (props) {
    super(props)
    this.state = {
      num: 20
    }
  }

  componentWillMount () {
    console.log('componentWillMount', '在组件渲染render之前执行')
  }

  componentDidMount () {
    console.log('componentDidMount', '在组件渲染render之后执行')
  }

  shouldComponentUpdate () {
    console.log('shouldComponentUpdate', '返回true和false  true代表可以改变  false则不可以改变')
    return true
  }

  componentWillUpdate () {
    console.log('componentWillUpdate', '数据在改变之前执行(state, props)')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate', '数据在改变之后执行(state, props)')
  }

  componentWillReceiveProps () {
    console.log('componentWillReceiveProps', 'props发生改变执行')
  }

  componentWillUnmount () {
    console.log('componentWillUnmount', '组件卸载之前执行')
  }


  // 修改
  update = () => {
    this.setState ({
      num: this.state.num += 1
    })
  }

  // 子传父  调用父级方法执行
  updateTitle = () => {
    this.props.updateChild()
  }

  render () {
    const { num } = this.state
    return (
      <div>
        react的生命周期
        <div>生命周期: { num }</div>
        <div>{this.props.title}</div>
        <button onClick={ this.update }> 修改</button>
        <button onClick={ this.updateTitle }> 修改title</button>
      </div>
    )
  }
}
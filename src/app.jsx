import React from 'react'
// import Home from './mySecond'
// import MyNav from './myNav'
// import StateComponent from './StateComponent'
// import LifeComponent from './LifeComponent'
// import StateDemo from './StateDemo'
// import IfDemo from './IfDemo'
// import ListDemo from './ListDemo'
// import FormDemo from './FormDemo'
// import RefDemo from './RefDemo'
import Parents from './components/Parents'

// 使用类的形式创建组件， Hook形式
class App extends React.Component {

  // constructor () {
  //   super()
  //   this.state = {
  //     title: '嘿嘿001'
  //   }
  // }

  //     // 修改title
  // updateChild = () => {
  //   this.setState({
  //     title: '嘿嘿05221'
  //   })
  // }


  // 渲染函数
  render () {

    // const nav = ['首页', '视频', '学习']
    // const item = ['首页数据', '视频数据', '学习数据']

    return (
      <div>
        <p>首次创建react的组件</p>
        <p>感觉生活已经达到了高潮</p>
        <Parents />
        {/* <RefDemo /> */}
        {/* <FormDemo /> */}
        {/* <ListDemo /> */}
        {/* <IfDemo/> */}
        {/* <StateDemo /> */}
        {/* <LifeComponent  updateChild={this.updateChild} title={this.state.title}/> */}
        
        {/* <StateComponent /> */}
        {/* <Home />
        <MyNav nav= { nav } title="首页导航" />
        <MyNav nav= { item } title="children导航" /> */}
      </div>
    )
  }
}

export default App
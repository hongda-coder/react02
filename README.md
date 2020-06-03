## 创建项目
npx create-react-app my-app
cd my-app
npm start

## 环境介绍
public: 入口文件
src: 源码文件

## React的生命周期
生命周期函数列表
  componentWillMount: 在组件渲染render之前执行
  componentDidMount: 在组件渲染render之后执行
  shouldComponentUpdate: 返回true和false  true代表可以改变  false则不可以改变
  componentWillUpdate: 数据在改变之前执行(state, props)
  componentDidUpdate: 数据在改变之后执行(state, props)
  componentWillReceiveProps: props发生改变执行
  componentWillUnmount: 组件卸载之前执行
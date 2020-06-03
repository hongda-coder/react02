import React from 'react'
export default class IfDemo extends React.Component {

  constructor () {
    super()
    this.state = {
      isLogin: false,
      content: []
    }
  }

  login = () => {
    this.setState({
      isLogin: !this.state.isLogin,
      content: this.state.content.concat("88")
    })
  }

  render () {

    let  content  = this.state.content

    // let showLogin = this.state.isLogin ? <div>已经登录</div> : <div>请登录</div>
    return  (
      <div>
        条件渲染
        <button onClick={this.login}>登录</button>
        { 
          content.length > 0 ?
          <div>
            {
              content.map((el, index) => {
                return  <div key={index}> {el}</div> 
              })
            }
          </div>
            : <div>请登录</div>
        }

        
        
      </div>
    )
  }
}
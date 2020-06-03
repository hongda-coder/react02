import React from 'react'

export default class StateDemo extends React.Component {

  constructor () {
    super() 
    this.state = {
      num: 0
    }
  }


  update = async () => {
    // this.setState({   //异步
    //   num: this.state.num + 1
    // }, () => {
    //   console.log(this.state.num)
    // })
    await this.setStateAsync({num: this.state.num + 1})
    console.log(this.state.num)
  }

  setStateAsync = (state) => { // 同步
    return new Promise( (resolve) => {
      this.setState(state, resolve)
    })
  }

   render () {
    return  (
      <div>
        setState是同步还是异步
        <p> {this.state.num }</p>
        <button onClick={this.update}> 改吧 </button>
      </div>
    )
   }
}
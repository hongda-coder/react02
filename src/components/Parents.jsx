import React from 'react'

import Child1 from './Child1'
import Child2 from './Child2'


export default class Parents extends React.Component {

  constructor () {
    super()
    this.state = {
      money: 0
    }
  }

  onChangeMoney = (e) => {
    this.setState({
      money: e.target.value
    })
  }


  render () {
    const { money } = this.state
    return (
      <div>
        Parents
        <div><input type="text" value={money} onChange={this.onChangeMoney} /></div>
        <div><Child1  money={this.state.money} /> </div>
        <div><Child2  money={this.state.money}/> </div>
      </div>
    )
  }
}
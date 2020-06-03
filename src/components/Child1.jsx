import React from 'react'

export default class Child1 extends React.Component {

  render () {
    return (
      <div>
        人命币 <p>{this.props.money}</p> 
      </div>
    )
  }
}
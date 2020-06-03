import React from 'react'

export default class Child2 extends React.Component {

  render () {
    return (
      <div>
        美金 <p>{this.props.money * 15}</p> 
      </div>
    )
  }
}
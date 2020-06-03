import React from 'react'


export default class RefDemo extends React.Component {

  constructor () {
    super()
    this.myRef = React.createRef()
  }

  componentDidMount () {
    const myNode = this.myRef.current
    myNode.style.color = 'pink'

  }

  render () {
    return (
      <div>
        ref
        <div ref={this.myRef}>愚蠢的大傻</div>
      </div>
    )
  }
}
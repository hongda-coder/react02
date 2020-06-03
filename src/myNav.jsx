import React from 'react' 

export default class MyNav  extends React.Component {
  render () {

    // 注意  props不可以被修改
    const nav = this.props.nav
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ul>
          {
            nav.map((el, index) => {
              return <li key={index}>{ el }</li>
            })
          }
        </ul>
      </div>
    )
  }
}
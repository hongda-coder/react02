import React from 'react'

export default class FormDemo extends React.Component {

  constructor () {
    super()
    this.state = {
      asd: true,
      value: '',
      value2: '',
      value3: '',
      value4: ''
    }
  }

  // 表单输入
  handleChange(key, e){
    console.log(e.target.value)
    this.setState({
      [key]: e.target.value,
    })
  }

  // 提交
  submit = (e) => {
    e.preventDefault()  // 阻止表单默认提交事件

    const {value, value2, value3, value4}=this.state;
　　let parmas = {
      value,
      value2,
      value4,
      value3
　　}
    console.log(parmas)
  }


  render () { 
    const { value, value2, value3, value4} = this.state
    return ( 
      <div>表单

        <form onSubmit={this.submit}>
          <input type="text" name='isTrue' value={value}  onChange={this.handleChange.bind(this, 'value')} />
          <input type="text" name='isTrue' value={value2}  onChange={this.handleChange.bind(this, 'value2')} />
          <input type="text" name='isTrue' value={value3}  onChange={this.handleChange.bind(this, 'value3')} />
          <input type="text" name='isTrue' value={value4}  onChange={this.handleChange.bind(this, 'value4')} />
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }
}
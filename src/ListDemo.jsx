import React from 'react'

export default class ListDemp extends React.Component{

  constructor () {
    super()
    this.state = {
      students: [
        {
          name: '大傻',
          age: '22',
          course: 'C++',
          face: '可爱'
        },
        {
          name: '二傻',
          age: '21',
          course: 'java',
          face: '蠢'
        },
        {
          name: '三傻',
          age: '18',
          course: 'JavaScript',
          face: '萌'
        }
        
      ]
    }
  }


  render () {
    const students = this.state.students
    return (
      <div>
        列表渲染以及
        <ul>
          {
            students.map((el, index) => {
              return  <li key={index}>
                        <div>姓名：<span>{el.name}</span> </div>
                        <div>年龄：<span>{el.age}</span> </div>
                        <div>学科：<span>{el.course}</span> </div>
                        <div>样貌：<span>{el.face}</span> </div>
                      </li>   
            })
          }

        </ul>
      </div>
    )
  }
}
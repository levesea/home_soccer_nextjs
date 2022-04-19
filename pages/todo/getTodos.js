import axios from 'axios'
import {useEffect, useState} from 'react'

export default function getTodos() {
  const columns = ["사용자ID", "할일내용", "완료"]
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/api/todo/list').then(res => {
        setData(res.data.todos)
      }).catch(err=>{})
  },[])
  return (
    <div>
      <h1>TO Do 목록</h1>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((abc,_id) => (
            <tr key={_id} >
              <td >{abc.userid}</td>
              <td >{abc.task}</td>
              <td >{abc.completed}</td>
            </tr>
          ))
          }

        </tbody>
      </table>
    
    </div>
  )
}

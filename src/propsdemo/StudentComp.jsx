import React, { useState } from 'react'
import { StudentList } from './StudentList'
import { MyButton } from './MyButton'

export const StudentComp = () => {

    var appName = "Student Management System"
    const [studentList, setstudentList] = useState([
        {
            id:1,
            name:"amit",
            age:23
        },
        {
            id:2,
            name:"ram",
            age:24
        },
        {
            id:3,
            name:"sumit",
            age:25
        }
    ])

  return (
    <div style={{textAlign:"center"}}>
            <button>CLICK</button>
            <MyButton name="test" class = "btn btn-danger"></MyButton>
            <h1>Student Data</h1>

            <StudentList appName ={appName} stuList={studentList}></StudentList>  
            {/* //parent child */}
    </div>
  )
}

import React, { useState } from 'react'
import { EmployeeList } from './EmployeeList'

export const EmployeeComp = () => {
    
    var appName = "Employee managament"
    const [empList, setempList] = useState([
        {
            id:1,
            name:"ram",
            age:23
        },
        {
            id:2,
            name:"amit",
            age:22
        }
    ])

  return (
    <div>
        <h1 style={{textAlign:"center"}}>EmployeeComp</h1>
        <EmployeeList appName={appName} list = {empList}></EmployeeList>
    </div>
  )
}

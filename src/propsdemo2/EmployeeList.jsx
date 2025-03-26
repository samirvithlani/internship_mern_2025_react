import React from 'react'

//props -->
export const EmployeeList = (props) => {
    //props =={appName:"value...",list:[{},{}]}
    console.log("empList props",props)
  return (
    <div style={{textAlign:"center",marginTop:"20px",backgroundColor:"GrayText"}}>
        <h1>{props.appName}</h1>
        <h1>EmployeeList</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.list.map((emp)=>{
                        return<tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                        </tr>
                    })
                }
            </tbody>

        </table>
    </div>
  )
}

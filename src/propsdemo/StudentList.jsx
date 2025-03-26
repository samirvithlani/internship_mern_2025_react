import React from 'react'

export const StudentList = (props) => {
    //props =={appName:"bjkhj"}
    console.log("studentList props",props)
  return (
    <div style={{textAlign:"center",marginTop:"30px",height:"auto",backgroundColor:"GrayText"}}>
        <h1>{props.appName}</h1>
        <h1>STUDNT LIST</h1>
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
                    props.stuList.map((stu)=>{
                        return <tr>
                            <td>{stu.id}</td>
                            <td>{stu.name}</td>
                            <td>{stu.age}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </div>
  )
}

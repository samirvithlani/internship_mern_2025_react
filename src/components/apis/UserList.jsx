import axios from 'axios'
import React, { useState } from 'react'

export const UserList = () => {

    const [users, setusers] = useState([])
    const getUserList = async()=>{
        const res = await axios.get("https://node5.onrender.com/user/user")
        setusers(res.data.data)
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>USER LIST</h1>
        <button onClick={()=>{getUserList()}}>GET</button>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>AGE</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                {
                    users?.map((user)=>{
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {/* <span style={{color:user.age>=23?"red":""}}>{user.age}</span></td> */}
                                <span style={{color:user.age>=23 && "red"}}>{user.age}</span></td>
                            <td>
                                {
                                    user.isActive == true ? "Active":"Not Active"
                                }
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

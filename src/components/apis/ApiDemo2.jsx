import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo2 = () => {


    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])

    const getUserData =async()=>{

        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log(res) //axios object...
        console.log(res.data)
        setmessage(res.data.message)
        setusers(res.data.data)
    }

  return (
    <div>
        <h1>API DEMO 2</h1>
        <button onClick={()=>{
            getUserData()
        }}>GET</button>
        {message}
        {
            users?.map((user)=>{
                return <li>{user.name}</li>
            })
        }
    </div>
  )
}

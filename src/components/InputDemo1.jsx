import React, { useState } from 'react'

export const InputDemo1 = () => {


    const [name, setname] = useState("")
    const [email, setemail] = useState("")

    const nameHandler =(event)=>{
        console.log(event.target.value)
        setname(event.target.value)
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>INPUT DEMO 1</h1>
        <div>
            <label>NAME</label>
            <input type='text' placeholder='enter name' 
            onChange={(event)=>{nameHandler(event)}}></input>
            {name}
        </div>
        <div>
            <label>EMAIL</label>
            <input type='text' placeholder='enter email'
            onChange={(event)=>{setemail(event.target.value)}}
            ></input>
            {email}
        </div>
    </div>
  )
}

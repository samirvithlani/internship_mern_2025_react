import React from 'react'

export const ArrayDemo1 = () => {

    var users = ["ram","shyam","amit","sumit"]

  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{textAlign:"center",color:"blue"}}> ARRAY DEMO 1</h1>
        {/* <h2>{users[0]}</h2>
        <h2>{users[1]}</h2>
        <h2>{users[2]}</h2>
        <h2>{users[3]}</h2> */}
        {
            users.map((user)=>{
                //return (<li>{user}</li>)
                return <li>{user}</li>
            })  
        }
    </div>
  )
}

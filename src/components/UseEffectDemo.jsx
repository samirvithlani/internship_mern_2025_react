import React, { useEffect, useState } from 'react'

export const UseEffectDemo = () => {

    //()=>{}function
    //[] -->depedancy array
    const [count, setcount] = useState(0)
    //50
    useEffect(()=>{
        console.log("use effect called....")
    },[count])

  return (
    <div style={{textAlign:"center"}}>
        <h1>USE EFFECT DEMO</h1>
        <h1>{count}</h1>
        <button onClick={()=>{setcount(count+1)}}>+</button>
    </div>
  )
}

import React, { useState } from 'react'

export const UseStateDemo = () => {

    //var count =0;
    const[count,setCount]=useState(0)
    //count = state variable...
    //setCount -->function -->it use for change update in state variable,,,
    //0 initalValue

    function increseCount (){

      //  count++;
        setCount(count+1)
        console.log("count = ",count)

    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DEMO</h1>
        <h2>Count = {count}</h2>
        {/* <button onClick={increseCount}>increse</button> */}
        <button onClick={()=>{increseCount()}}>increse</button>
    </div>
  )
}

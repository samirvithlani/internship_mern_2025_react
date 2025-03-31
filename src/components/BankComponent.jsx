import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { depositAction, withdrawAction } from '../redux/BankSlice'

export const BankComponent = () => {
    const [depositAmount, setdepositAmount] = useState(0)
    const [withdrawAmount, setwithdrawAmount] = useState(0)
    //dispatch
    const dispatch = useDispatch()

    const depositHandler =()=>{
        console.log("deposit",depositAmount)
        dispatch(depositAction(Number(depositAmount))) //action --> payload
    }
    const withdrawHandler =()=>{
        dispatch(withdrawAction(Number(withdrawAmount)))
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Bank Component</h1>
        <div>
            <label>DEPOSIT</label>
            <input type='text' onChange={(e)=>{setdepositAmount(e.target.value)}}></input>
            <button onClick={()=>depositHandler()}>DEPOSIT</button>
        </div>
        <div>
            <label>WITHDRAW</label>
            <input type='text' onChange={(e)=>{setwithdrawAmount(e.target.value)}}></input>
            <button onClick={()=>{withdrawHandler()}}>WITHDRAW</button>
        </div>
    </div>
  )
}

import React from 'react'
import { useForm } from 'react-hook-form'
import { CustomButton } from '../../propsdemo2/CustomButton'

export const FormDemo1 = () => {
    const {register,handleSubmit} = useForm()
    //register -->object...
    //handleSubmit --> function

    const submitHandler = (data)=>{
        console.log("data.....",data)
    }

    const callFunction = ()=>{
        alert('called...')
    }

  return (
    <div style={{textAlign:"center"}}>
        <button>CLICK</button>
        <CustomButton name="from1" funName = {callFunction}></CustomButton>
        <h1>FORM DEMO 1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' placeholder='enter name' {...register("firstName")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type='number' placeholder='enter age' {...register("age")}></input>
            </div>
            <div>
                <select {...register("country")}>
                    <option value="india">INDIA</option>
                    <option value="usa">USA</option>
                    <option value="fail">UK</option>
                </select>
            </div>
            <div>
                <input type='submit' ></input>
            </div>
        </form>
    </div>
  )
}

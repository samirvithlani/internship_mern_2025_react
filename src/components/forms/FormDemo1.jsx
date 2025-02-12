import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
    const {register,handleSubmit} = useForm()
    //register -->object...
    //handleSubmit --> function

    const submitHandler = (data)=>{
        console.log("data.....",data)
    }

  return (
    <div style={{textAlign:"center"}}>
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

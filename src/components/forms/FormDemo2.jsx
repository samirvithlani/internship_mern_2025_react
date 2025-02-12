import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {

    const {register,handleSubmit} =useForm()

    const submitHandler = (data)=>{
        console.log(data)
    }

  return (
    <div style={{textAlign:"center"}}>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>FirstName</label>
                    <input type='text' {...register("firstname")}></input>
                </div>
                <div>
                    <label>lastname</label>
                    <input type='text' {...register("lastname")}></input>
                </div>

                <div>
                    <label>GENDER</label>
                    MALE:<input type='radio' name='gender' value="male"{...register("gender")}></input>
                    FEMALE:<input type='radio' name='gender' value="female"{...register("gender")}></input>
                </div>
                <div>
                    <input type='submit' value="book ticket"></input>
                </div>
            </form>
    </div>
  )
}

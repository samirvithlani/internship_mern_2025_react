import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
    const {register,handleSubmit} = useForm()

    const submitHandler = (data)=>{
        console.log(data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>name</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>GENDER</label>
                FEMALE: <input type='radio' value="female" {...register("gender")} name='gender'></input>
                MALE: <input type='radio' value="male" {...register("gender")}  name='gender'></input>
                
            </div>
            <div>
                <label>REPORTS</label>
                CRC: <input type='checkbox' {...register("reports")} name='reports' value="crc"></input>
                CBC: <input type='checkbox' {...register("reports")} name='reports' value="cbc"></input>
                Food P: <input type='checkbox' {...register("reports")} name='reports' value="fp"></input>

            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}

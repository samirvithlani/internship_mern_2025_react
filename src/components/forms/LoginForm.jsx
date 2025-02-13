import React from 'react'
import { useForm } from 'react-hook-form'

export const LoginForm = () => {


const {register,handleSubmit,formState:{errors}} = useForm()

    const submitHandler = (data)=>{
        console.log(data)
    }
    

    const validationSchema = {
        emailValidator :{
            required:{
                value:true,
                message:"email is required"
            }
        },
        passwordValidator:{
            required:{
                value:true,
                message:"password is required*"
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>EMAIL</label>
                <input type='text' {...register("email",validationSchema.emailValidator)}></input>
                <span style={{color:"red"}}>
                    {errors.email?.message}
                </span>
            </div>
            <div>
                <label>PASSWORD</label>
                <input type='password' {...register("password",validationSchema.passwordValidator)}></input>
                <span style={{color:"red"}}>
                    {errors.password?.message}
                </span>
            </div>
            <div>
                <input type='submit' value="login"></input>
            </div>
        </form>
    </div>
  )
}

import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {

    const {register,handleSubmit,formState:{errors}} = useForm()
    console.log("errors....",errors)
    

    const submitHandler = (data)=>{
        alert("subbmited...")
        console.log("data...........",data)
    }

    const validationSchema = {
        ageValidator:{
            required:{
                value:true,
                message:"Age is required"
            },
            min:{
                value:18,
                message:"min age 18*"
            },
            max:{
                value:60,
                message:"max age 60*"
            }
        },
        emailValidator:{
            required:{
                value:true,
                message:"email is required*"
            }
        }
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 5</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>Name</label>
            <input type='text' placeholder='enter name' {...register("name",{required:{value:true,message:"Name is required*"}})}></input>
            {/* {errors.name.message} */}
            {/* {
                errors.name && errors.name.message
            } */}
            {
                errors.name?.message
            }
        </div>

        <div>
            <label>AGE</label>
            <input type='text' {...register("age",validationSchema.ageValidator)}></input>
            <span style={{color:"red"}}>{errors.age?.message}</span>
        </div>
        <div>
            <label>EMAIL</label>
            <input type='text' {...register("email",validationSchema.emailValidator)}></input>
            <span style={{color:"red"}}>{errors.email?.message}</span>
        </div>


        <div>
            <input type='submit'></input>
        </div>
        </form>
    </div>
  )
}

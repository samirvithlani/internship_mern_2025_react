import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo7 = () => {

    //const {register,handleSubmit} = useForm({})
    const {register,handleSubmit} = useForm({name:"",greet:"",birthDate:""})
    const [output,setOutput]=useState()
    const [isSubbmied, setisSubbmied] = useState(false)

    const submitHandler = (data)=>{
        console.log(data)
        //{....,color:"#ffff"}
        setisSubbmied(true)
        setOutput(data) //data -->{} --.output {...,color:"#ffff"}
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 7</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAMe</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>Birth Date</label>
                <input type='date' {...register("birthDate")}></input>
            </div>
            <div>
                <label>Greetings</label>
                <input type='text' {...register("greet")}></input>
            </div>
            <div>
                <label>COLOR</label>
                <input type='color' {...register("color")}></input>
            </div>
            <div>
                <input type='submit' value="wish"></input>
            </div>
        </form>
        {
            isSubbmied == true ?
            <div style={{color:output.color}}>
            <h1>Name :{output?.name}</h1>
            <h2>Greet: {output?.greet}</h2>
            <h2>BirthDate :{output?.birthDate}</h2> 
        </div>
        :""
        }
        
    </div>
  )
}

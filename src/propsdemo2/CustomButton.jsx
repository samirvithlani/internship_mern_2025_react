import React from 'react'

export const CustomButton = (props) => {
  return (
    <button className={props.class || "btn btn-primary"} onClick={()=>{props.funName()}}
    
    >{props.name || "button"}</button>
  )
}

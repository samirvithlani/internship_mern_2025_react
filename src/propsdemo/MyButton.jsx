import React from 'react'

export const MyButton = (props) => {
    //{name:"test"}
  return (
    <button className={props.class || "btn btn-primary"}>{props.name || "click Me"}</button>
  )
}

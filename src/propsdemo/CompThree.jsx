import React from 'react'

export const CompThree = (props) => {
    console.log("comp3 props",props)
  return (
    <div>
        <h1>COMP 3</h1>
        <h2>title{props.title}</h2>
    </div>
  )
}

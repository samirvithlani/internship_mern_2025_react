import React from 'react'
import { CompThree } from './CompThree'

export const CompTwo = (props) => {
  return (
    <div>
        <h1>COMP 2</h1>
        <h2>{props.title}</h2>
        <CompThree title = {props.title}></CompThree>
    </div>
  )
}

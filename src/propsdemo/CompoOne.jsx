import React from 'react'
import { CompTwo } from './CompTwo'

export const CompoOne = () => {
    var title = "REACT"
  return (
    <div style={{textAlign:"center"}}>
        <h1>COMP 1</h1>
        <CompTwo title = {title}></CompTwo>
    </div>
  )
}

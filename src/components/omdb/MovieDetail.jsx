import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {

  const id = useParams().id
  const [detail, setdetail] = useState({})

  const getDetail = async()=>{

    const res = await axios.get("http://www.omdbapi.com/?apikey=yourid&i="+id)
    console.log(res.data)
    setdetail(res.data)
  }
  return (
    <div style={{textAlign:"center"}}>
        <h1>MOVIE DETAIL - {id}</h1>
        <button onClick={()=>{getDetail()}}>detail</button>
        <h1>COUNTRY {detail?.Country}</h1>
    </div>  
  )
}

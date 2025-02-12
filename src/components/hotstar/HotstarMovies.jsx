import React from 'react'
import { Link } from 'react-router-dom'

export const HotstarMovies = () => {


  

  return (
    <div style={{textAlign:"center",height:"200px",backgroundColor:"GrayText"}}>
        <h1>HOTSTAR Movies</h1>
        <ul>
        <li><Link to="/play/moneyheist">Money Heist</Link></li>
        <li><Link to="/play/100090">India-ENG ODI</Link></li>
        <li><Link to="/play/">ok</Link></li>
        </ul>
    </div>
  )
}

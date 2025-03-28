import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartSlice'

export const MyProducts = () => {
    //dispatch hook
    const dispatch = useDispatch()
  return (
    <div style={{textAlign:"center"}}>
        <div className='row'>
            <div className='col'>
                <div className='card md-4'>
                    <h1>Iphone 15</h1>
                    <img src=''></img>
                    <p>PRICE</p>
                    <button onClick={()=>{
                        dispatch(addToCart({id:1,name:"iphone15",price:1000}))
                    }}>ADD TO CART</button>
                </div>
                <div className='card md-4'>
                    <h1>Iphone 16</h1>
                    <img src=''></img>
                    <p>PRICE</p>
                    <button onClick={()=>{
                        dispatch(addToCart({id:1,name:"iphone15",price:1000}))
                    }}>ADD TO CART</button>
                </div>
            </div>
        </div>

    </div>
  )
}

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { incrementByValue } from '../redux/counterSlice';

const ComponentD = () => {
    const [value,setvalue]=useState(0);
    const dispatch=useDispatch();
    function increaseByValue(){
        dispatch(incrementByValue(parseInt(value)))
    }
    console.log(value)
  return (
    <div style={{border:"1px solid",padding:"1rem"}}>
        <h2>Component D</h2>
        <input type="number" name="" id="" onChange={(e)=>setvalue(e.target.value)} />
        <button onClick={increaseByValue}>Increase By Value</button>
      
    </div>
  )
}
export default ComponentD

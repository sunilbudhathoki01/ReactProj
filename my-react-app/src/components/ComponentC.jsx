import React from 'react'
import { useSelector } from 'react-redux'
import ComponentD from './ComponentD'

const ComponentC=()=> {
  const {count}=useSelector((state)=>state.counter)
 return(
  <div style={{border:"1px solid",padding:"1rem"}}>
    <h2>Component C</h2>
    <p>Value Of A:{count}</p>
    <p>Value of c:{count*count*count}</p>
    <ComponentD></ComponentD>
  </div>
 )
}

export default ComponentC

import React from 'react'
import ComponentC from './ComponentC.jsx'

const ComponentB=()=> {
  return (
    <div style={{border:"1px solid",padding:"1rem"}}>
      <h2>Component B</h2>
      <ComponentC></ComponentC>
</div>
  )
}

export default ComponentB

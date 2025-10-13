import React from 'react'
import ComponentC from './ComponentC'

function ComponentB({numB=0}) {
  return (
    <div>
        square:{numB*numB}
        <ComponentC numC={numB*numB}></ComponentC>
      
    </div>
  )
}

export default ComponentB

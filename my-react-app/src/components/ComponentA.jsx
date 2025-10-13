import React from 'react'
import ComponentB from './ComponentB'

function ComponentA({numA=0}) {
  return (
    <div>
        incre:{numA+5}
        <ComponentB numB={numA +5}></ComponentB>
    </div>
  )
}

export default ComponentA

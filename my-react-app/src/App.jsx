import "../src/App.css"
import React, { useEffect, useRef, useState } from 'react'
import Card from './Card.jsx'
import ComponentA from "./components/ComponentA.jsx"
import ComponentB from "./components/ComponentB.jsx"
import ComponentC from "./components/ComponentC.jsx"
import ProductsTable from "./components/ProductsTable.jsx"
import Header from "./components/Header.jsx"
function App() {
  const [count,setCount]=useState(0)
  const titleRef=useRef(null)
  const inputRef=useRef(null)
  useEffect(()=>{
    console.log(count)
    console.log(titleRef)
    test()

  },[count])
  function test(){
    console.log("test")

  }
  return (
    
    <div>
 
<ProductsTable></ProductsTable>
      <ComponentA numA={count}></ComponentA>
    
        <h1 ref={titleRef}>hello title</h1>
        <input type="text"  ref={inputRef}/>

          <span>count:{count}<br></br></span>
          <button onClick={()=>{
            setCount(count +1)
           
            }}>click</button>
<Card title="samsung" brand="Samsung " price="$20"></Card>
<Card title="Iphone13" brand="Apple" price="$40"></Card>
   <Card title="Motorola" brand="Nokia" price="$60"></Card>
</div>
)
}

export default App

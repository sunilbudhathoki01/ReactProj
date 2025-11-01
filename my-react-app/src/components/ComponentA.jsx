import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/counterSlice"
import ComponentB from "./ComponentB"

const ComponentA=()=>{
  const dispatch=useDispatch()
  const {count}=useSelector((state)=>state.counter)
  function increaseCounter(){
    dispatch(increment())
  }
  function decreaseCounter(){
    dispatch(decrement())
  }
  return(
    <div style={{border:"1px solid",padding:"1rem"}}> 
    <h2>Component A</h2>
    <p>Value Of A:{count}</p>
    <div  style={{border:"1px solid",padding:"1rem"}}>
      <button onClick={increaseCounter}>Increase Counter</button>
      <button onClick={increaseCounter}>Decrease Counter</button>
      
    </div>
    <ComponentB numB={count}></ComponentB>
    </div>
  )
}
export default ComponentA
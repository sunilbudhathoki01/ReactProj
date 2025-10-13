import React, { useState } from 'react'
function Card({title,brand,price}){
  const[favourite,setFavourite]=useState(false)


return (
  <div className="Card">
  <h1>{title}</h1>
  <span>{brand}</span>
  <p>{price}</p>
  <hr/>
  <button onClick={()=>{setFavourite(!favourite)}}>{favourite ?"like":"unlike"}</button>
  </div>
  
)
}

export default Card

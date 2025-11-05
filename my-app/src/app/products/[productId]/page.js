import React from 'react'

 async function page({params}) {
    const productId= (await params).productId
    const product=await fetch(`https://fakestoreapi.com/products/${productId}`).then((res)=>res.json())
return (
    <div>
      <h1>ProductId:{productId}</h1>
      <ul>
        <li>products Name:{product.title}</li>
        <li>products description:{product.description}</li>
        <li>Products price:{product.price}</li>
      </ul>
    </div>
  )
}

export default page

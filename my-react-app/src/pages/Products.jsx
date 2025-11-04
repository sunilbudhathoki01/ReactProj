import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router'

const Products = () => {
    const [products,setProducts]=useState();
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then
        ((data)=>setProducts[data])
    },[])
  const [query]=useSearchParams()
  const brand=query.get("brand")
  const category=query.get("category")
  const params=useParams()
  console.log(brand,category)
  return (
  <>
  
   <h1>products page</h1>
   <p>Brand:{brand}</p>
   <p>Category:{category}</p>

  </>

  )
}

export default Products

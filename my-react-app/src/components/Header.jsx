import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
   <header>
     <div>
        <h1>LOGo</h1>
     <nav>
         <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
     </nav>
    </div>
   </header>
  )
}

export default Header

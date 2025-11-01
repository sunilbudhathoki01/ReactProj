import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'

const MainLayouts = () => {
  return (

        <><Header/><Outlet></Outlet>
        <footer>all rights reserved</footer>
        </>
   
  )
}

export default MainLayouts

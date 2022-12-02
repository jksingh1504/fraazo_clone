import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import ProductPage from './ProductPage'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:type/:category" element={<ProductPage/>}/>
    </Routes>
  )
}

export default MainRoutes
import React from "react"
import About from "../../components/About"
import Home from "../../components/Home/home"
import Menu from "../../components/Menu"

import Navbar from "../../components/Nav/Navbar"
import Differentials from "../../components/Team/differentials"

 const Pizzaria = ()=>{
     return (
         <>
        <Navbar />
        <Home/>
        <About/>
        <Menu/>
        <Differentials/>
        </>
     )
 }
 export default Pizzaria 
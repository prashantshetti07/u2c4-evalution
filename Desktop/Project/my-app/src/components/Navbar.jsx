import React from "react"
import { Link } from "react-router-dom"
import { Order } from "./order"


const Navbar=()=>{

   return (
    <div  style={{display:"flex",flexDirection:"column"}}>
         <Link to="/order" ><h2>order</h2></Link>
         <Link to="/dashboard" ><h2>Dashboard</h2></Link>
         <Link to="/listings" ><h2>Listings</h2></Link>
         <Link to="/customers" ><h2>Customers</h2></Link>
    </div>
   )
}


export {Navbar}
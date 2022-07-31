
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';
import { BrowserRouter, Route, Link,Routes } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar__div">
     <img src="https://www.pngmart.com/files/Amazon-Logo-Download-PNG-Image.png" className="img_logo"/>
      <div className="input__div">
        <input type ="text" className="input__field"/> 
        <div className="search_icondiv">
        <SearchIcon/>
        </div>
      </div>
      <BrowserRouter>
        <Link className="nav-link active" to="/">Country drop down</Link>
        <Link className="nav-link active" to="/login">Login</Link>
        <Link className="nav-link active" to="/">Returns</Link>
        <Link className="nav-link active" to="/">CART</Link>
    </BrowserRouter>
        
   
    </div>
  )
}

export default Navbar
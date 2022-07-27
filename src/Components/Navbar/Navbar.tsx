
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';

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
    <div>Country drop down</div>
    <div>Hello</div>
    <div>Returns</div>
    <div>CART</div>
        
   
    </div>
  )
}

export default Navbar
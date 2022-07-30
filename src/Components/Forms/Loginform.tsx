import React from 'react'
import './Loginform.css';

function Loginform() {
  return (<>
   <div className='img_logo1'>
 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwFknsvL1uwnMURYkkC4c5H8GvsSj8QSjV0g&usqp=CAU.png" />
 </div>
 <div className='maindiv'>
    <div className='loginform__div'>
        <h1>Sign-In</h1>          
        <div>
            <label>Email or mobile phone number</label><br/>
            <input type ="text" className="input__field"/> 
            <button className='btnclass'>Continue</button>
         </div>     
    </div>
</div>
    </>
  )
}

export default Loginform
import React from "react";
import "./Loginform.css";

function Loginform() {
  return (
    <div className="login__wrap">
      <div className="maindiv">
        <div className="img_logo1">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwFknsvL1uwnMURYkkC4c5H8GvsSj8QSjV0g&usqp=CAU.png" />
        </div>
        <div className="loginform__div">
          <div>
            <h1 className="loginform__title">Sign-In</h1>
            <div className="form_group">
              <label>Email or mobile phone number</label>
              <br />
              <input type="text" />
            </div>
            <div className="form_group">
              <button className="btnclass">Continue</button>
            </div>
            <div className="form_group">
              <small>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</small>
            </div>
          </div>
        </div>
        <div className="signup__div">
         <p>New to Amazon?</p>
        <button>Sign up</button>
        </div>
       
      </div>
    </div>
  );
}

export default Loginform;

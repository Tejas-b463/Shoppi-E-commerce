import React, {  useState, useRef } from "react";
import { IconUser, IconMail, IconBrandSamsungpass } from "@tabler/icons-react";
import {checkValidData} from '../../utils/validate'
const LoginSignup = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const[errorMessage, setErrorMessage] = useState(null)

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handlButtonClick = () => {
         
      const msg =  checkValidData(email.current.value, password.current.value, name.current.value);
     setErrorMessage(msg);
  }

  return (
    <div className="user-container">
      <div className="header">
        <div className="text"> {isSignInForm ? "Login" : "Sign Up"}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
       {isSignInForm ? <div></div> :
        <div className="input">
        <IconUser className="icon" />
        <input ref={name} type="text" placeholder="Name" />
      </div>
       }
        <div className="input">
          <IconMail className="icon" />
          <input ref={email} type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <IconBrandSamsungpass className="icon" />
          <input ref={password} type="password" placeholder="Password" />
        </div>
      </div>
      
        <div className="forgot-password">
         <span onClick={toggleSignInForm}>{isSignInForm ? "New User ? Create Account" : "Already a Customer ? Login"}</span>
         <p className="errorMessage">{errorMessage}</p>
        </div>
      
      <div className="submit-container">
        <div className="submit" onClick={handlButtonClick}>
          {isSignInForm ? "Login" : "Sign Up"}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

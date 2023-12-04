import React, {  useState, useRef } from "react";
import { IconUser, IconMail, IconBrandSamsungpass } from "@tabler/icons-react";
import {checkValidData} from '../../utils/validate'
import {createUserWithEmailAndPassword,  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../utils/firebase"
import { useNavigate } from "react-router";
const LoginSignup = () => {

  const navigate = useNavigate();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const[errorMessage, setErrorMessage] = useState(null)

 
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handlButtonClick = () => {
         
      const msg =  checkValidData(email.current?.value, password.current?.value);
      setErrorMessage(msg);
      if(msg) return;

      // Login Sign up Logic
      if(!isSignInForm){
        // Sign up
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    navigate("/")

  })
  .catch(() => {
    const errorMessage = "check email and password";
    setErrorMessage(errorMessage)
  });
      }
      else{
        // Login
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    navigate("/")
  })
  .catch(() => {
    const errorMessage = "check email and password";
    setErrorMessage( errorMessage)
  });
      }
  }

  return (
    <div className="user-container" onSubmit={(event)=> event.preventDefault()}>
      <div className="header">
        <div className="text"> {isSignInForm ? "Login" : "Sign Up"}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
       {!isSignInForm && (
        <div className="input">
        <IconUser className="icon" />
        <input  type="text" placeholder="Name" />
      </div>
       )} 
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

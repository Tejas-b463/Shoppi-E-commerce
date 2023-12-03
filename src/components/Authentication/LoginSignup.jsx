import React, { useState } from "react";
import { IconUser, IconMail, IconBrandSamsungpass } from "@tabler/icons-react";
const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  return (
    <div className="user-container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <IconUser className="icon" />
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input">
          <IconMail className="icon" />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <IconBrandSamsungpass className="icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost Password? <span>Click Here</span>
        </div>
      )}
      <div className="submit-container">
      <div
          className={action==="Login" ? "submit gray" : "sumbit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action==="Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
